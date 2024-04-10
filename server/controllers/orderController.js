import Order from "../models/Order.js";
import Customer from "../models/Customer.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const { JWT_SECRET } = process.env;

/**
 * The `placeOrder` function in JavaScript handles the process of placing an order, including creating
 * a new customer account if needed and saving the order details.
 */
const placeOrder = async (req, res) => {
    const {
        orderBy,
        products,
        email,
        password,
        confirmPassword,
        fullName,
        phone,
        street,
        city,
        state,
        country,
        pincode,
        shippingFees,
        subTotal,
        total
    } = req.body;

    // console.log(req.body)
    if (!orderBy) {

        if (password !== confirmPassword) {
            res.status(400).json({ message: "Password Mismatch" })
            return
        }

        try {
            const userExist = await Customer.findOne({ email: email });
            if (userExist) {
                res.status(400).json({ message: "This email already registered!" })
                return
            }

            const encryptedPassword = await bcrypt.hash(password, 10);
            let address = {
                street,
                city,
                state,
                country,
                pincode
            }

            // save customer
            const createdCustomer = await Customer.create({
                fullName,
                email,
                phone,
                address,
                password: encryptedPassword,
            });

            // save order
            const createdOrder = await Order.create({
                products: products.map(product => ({
                    product: product.id,
                    quantity: product.quantity
                })),
                subTotal,
                shippingFees,
                total,
                shippingAddress: address,
                orderBy: createdCustomer._id
            });

            console.log("A new order received!");

            // Authenticate for auto-login
            const token = jwt.sign({ _id: createdCustomer._id, role: createdCustomer.role }, JWT_SECRET);

            createdCustomer.token = token;
            createdCustomer.password = undefined;

            const cookieOptions = {
                // expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day
                maxAge: 24 * 60 * 60 * 1000, // 1 day
                httpOnly: true,
                secure: true, // Set to true if your site is served over HTTPS
                sameSite: 'none' // Consider setting this if your frontend and backend are on different domains
            }

            res.status(201)
                .cookie("token", token, cookieOptions)
                .json({ success: true, createdCustomer, createdOrder });

            console.log("A new customer:", createdCustomer._id, "registered!");

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error })
        }

    } else { // when user was already loggedin and orderby was defined
        let address = {
            street,
            city,
            state,
            country,
            pincode
        }
        // save order
        try {
            const createdOrder = await Order.create({
                products: products.map(product => ({
                    product: product.id,
                    quantity: product.quantity
                })),
                subTotal,
                shippingFees,
                total,
                orderBy,
                shippingAddress: address,
            });

            // Respond with success and created order's data
            res.status(201).json({ success: true, createdOrder });
            console.log("A new order received!");

        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: error });
        }
    }
}

// Get all orders
/**
 * The function `getAllOrders` retrieves all orders from the database and responds with success along
 * with the orders array or an error message if there is an issue.
 */
const getAllOrders = async (req, res) => {
    try {
        const allOrders = await Order.find({});

        // Respond with success and orders array
        res.status(200).json({ success: true, allOrders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

// Get an Order by ID
/**
 * The function `getOrderById` retrieves an order by its ID from the database and populates information
 * about the order's creator and products, then returns the order if found or an error message if not
 * found.
 */
const getOrderById = async (req, res) => {
    const { id } = req.params; // destucturing id from request params

    try {
        const order = await Order.findById(id).populate(['orderBy', 'products.product']);

        order ?
            res.status(200).json({ success: true, order })
            : res.status(404).json({ success: false, message: "Order not found!" })

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}


/**
 * This function retrieves orders based on a customer ID and returns them in a JSON response with
 * appropriate status codes.
 */
const getOrdersByCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        const orders = await Order.find({ orderBy: id });

        orders ?
            res.status(200).json({ success: true, orders })
            : res.status(404).json({ success: false, message: "Orders not found!" })

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

/**
 * The function `getOrdersByStatus` retrieves the count of orders based on a specified status and
 * returns a success message with the count or an error message if no orders are found.
 * `
 */
const getOrdersByStatus = async (req, res) => {
    const { status } = req.params;
    try {
        const orders = await Order.countDocuments({ orderStatus: status });

        orders ?
            res.status(200).json({ success: true, orders })
            : res.status(404).json({ success: false, message: "Orders not found!" })

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

/**
 * The function `getTotalOrder` asynchronously retrieves the total count of orders and sends a JSON
 * response with the count.
 */
const getTotalOrder = async (req, res) => {
    try {
        const totalOrders = await Order.countDocuments();

        res.status(200).json({ success: true, totalOrders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

const getTodaysOrders = async (req, res) => {
    try {
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        const todaysOrders = await Order.countDocuments({
            createdAt: { $gte: startOfDay, $lte: endOfDay }
        });

        res.status(200).json({ success: true, todaysOrders });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

const getTotalRevenue = async (req, res) => {
    try {
        const totalRevenue = await Order.aggregate([
            { $group: { _id: null, total: { $sum: '$total' } } }
        ]);
        res.status(200).json({ success: true, revenue: totalRevenue[0].total });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

const getTodaysRevenue = async (req, res) => {
    try {
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        const todaysRevenue = await Order.aggregate([
            {
                $match: {
                    createdAt: { $gte: startOfDay, $lte: endOfDay }
                }
            },
            { $group: { _id: null, total: { $sum: '$total' } } }
        ]);
        res.status(200).json({ success: true, revenue: todaysRevenue[0].total });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

const updateOrderById = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    console.log('updateorderbyid', status, id);
    try {
        const updatedOrder = await Order.findByIdAndUpdate(id, { $set: { orderStatus: status } }, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ success: true, updatedOrder });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

const deleteOrderById = async (req, res) => {
    const { id } = req.params
    try {
        const deletedOrder = await Order.findByIdAndDelete(id);
        if (!deletedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ success: true, message: 'Order deleted successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

export {
    placeOrder,
    getAllOrders,
    getOrderById,
    getOrdersByCustomer,
    getOrdersByStatus,
    getTotalOrder,
    getTodaysOrders,
    getTotalRevenue,
    getTodaysRevenue,
    updateOrderById,
    deleteOrderById
}
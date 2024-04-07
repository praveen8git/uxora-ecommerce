import Customer from "../models/Customer.js";

const getAllCustomers =  async (req, res) => {
    try {
        const allCustomers = await Customer.find({role: "customer"});

        const customersWithoutPassword = allCustomers.map(customer => {
            return {...customer._doc, password: undefined}
        });

        // Respond with success and customers array
        res.status(200).json({ success: true, allCustomers: customersWithoutPassword });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

const getCustomerById =  async (req, res) => {
    const { id } = req.params; // destucturing id from request params

    try {
        const customer = await Customer.findById(id);

        if (customer) {
            // Remove password before sending
            customer.password = undefined;
            res.status(200).json({ success: true, customer });
        } else {
            res.status(404).json({ success: false, message: "Customer not found!" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

const getNewCustomersCount =  async (req, res) => {
    try {
        // Calculate the date 24 hours ago
        const oneDayAgo = new Date();
        oneDayAgo.setDate(oneDayAgo.getDate() - 1);

        // Count customers created after the calculated date
        const newCustomersCount = await Customer.countDocuments({ createdAt: { $gte: oneDayAgo } });
        res.status(200).json({ success: true, newCustomersCount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

const getTotalCustomer =  async (req, res) => {
    try {
        const totalCustomers = await Customer.countDocuments({});
        res.status(200).json({ success: true, totalCustomers });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

const updateCustomerById =  async (req, res) => {
    const { id } = req.params;
    const { profilePicture } = req.body;

    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(id, {$set : { profilePicture }}, { new: true });
        if (!updatedCustomer) {
            return res.status(404).json({ success: false, message: "Customer not found!" });
        }

        updatedCustomer.password = undefined;

        res.status(200).json({ success: true, updatedCustomer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

const deleteCustomerById =  async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCustomer = await Customer.findByIdAndDelete(id);
        if (!deletedCustomer) {
            return res.status(404).json({ success: false, message: "Customer not found!" });
        }
        res.status(200).json({ success: true, message: "Customer deleted successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

export {
    getAllCustomers,
    getCustomerById,
    getTotalCustomer,
    updateCustomerById,
    deleteCustomerById,
    getNewCustomersCount
}


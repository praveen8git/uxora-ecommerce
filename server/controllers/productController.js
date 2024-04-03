import Product from "../models/Product.js";

const addProduct = async (req, res) => {

    try {
        const {
            productName,
            shortDescription,
            longDescription,
            image,
            regularPrice,
            salePrice,
            selectedCategory: category,
            selectedSubCategory: subCategory,
            featured
        } = req.body; // Destucturing request body

        // Validate required fields
        if (
            !(productName &&
                shortDescription &&
                longDescription &&
                image &&
                regularPrice &&
                salePrice &&
                category &&
                subCategory &&
                featured)
        ) {
            res.status(400).json({ message: "All fields are mandatory!" });
            return;
        }

        // Add product to DB
        const product = await Product.create({
            productName,
            shortDescription,
            longDescription,
            image,
            regularPrice,
            salePrice,
            category,
            subCategory,
            featured
        });

        // Respond with success and created product's data
        res.status(201).json({ success: true, product });
        console.log("A new product added!");

    } catch (error) { // handle error
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find({});

        // Respond with success and products array
        res.status(201).json({ success: true, allProducts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

/**
 * This function retrieves featured products from the database and returns them in
 * a JSON response.
 */
const getFeaturedProduct = async (req, res) => {

    try {
        const products = await Product.find({ featured: true });
        products ?
            res.status(201).json({ success: true, products })
            : res.status(404).json({ success: false, message: "Featured products not found!" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

/**
 * This function retrieves a product by its ID from a database and returns it in a JSON
 * response.
 * */
const getProductById = async (req, res) => {

    const { id } = req.params; // destucturing id from request params

    try {
        const product = await Product.findById(id);

        product ?
            res.status(201).json({ success: true, product })
            : res.status(404).json({ success: false, message: "Product not found!" })

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error });
    }
}

const getProductsByCategory = async (req, res) => {
    const { category, subCategory } = req.params;
    let products = [];
    if (subCategory) {
        try {
            products = await Product.find({ category, subCategory });
            products.length ?
                res.status(201).json({ success: true, products })
                : res.status(404).json({ success: false, message: "products not found!" })
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: error });
        }
    }
    else {
        try {
            products = await Product.find({ category });
            products.length ?
                res.status(201).json({ success: true, products })
                : res.status(404).json({ success: false, message: "products not found!" })
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: error });
        }
    }
}

const searchProducts = async (req, res) => {
    console.log(req.params);
    const { query } = req.params;
    try {
        const products = await Product.find({productName: { $regex: new RegExp(query, "i") }});
        products.length ?
                res.status(201).json({ success: true, products })
                : res.status(404).json({ success: false, message: "products not found!" })
    } catch (error) {
        console.error(error);
            res.status(500).json({ success: false, message: error });
    }
}

const deleteProductById = async (res, req) => {

}




export {
    addProduct,
    getAllProducts,
    getProductById,
    getFeaturedProduct,
    getProductsByCategory,
    searchProducts,
    deleteProductById
}
import express from 'express';
// import auth from '../middlewares/auth.js';
import {
    deleteProductById,
    getAllProducts,
    getFeaturedProduct,
    getProductById,
    getProductsByCategory,
    searchProducts
} from '../controllers/productController.js';

const customerRouter = express.Router();

customerRouter.get('/all-products', getAllProducts);
customerRouter.get('/product/:id', getProductById);
customerRouter.get('/search/:query', searchProducts);
customerRouter.get('/featured-products', getFeaturedProduct);
customerRouter.get('/category/:category/:subCategory?', getProductsByCategory);
customerRouter.delete('/product/:id', deleteProductById);

export default customerRouter;
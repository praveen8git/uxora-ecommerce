import express from 'express';
import auth from '../middlewares/auth.js';
import { getOrdersByCustomer, placeOrder } from '../controllers/orderController.js';
import { getCustomerById, updateCustomerById } from '../controllers/customerController.js';
import { getAllProducts, getFeaturedProduct, getProductById, getProductsByCategory, searchProducts } from '../controllers/productController.js';

const customerRouter = express.Router();

customerRouter.get('/all-products', getAllProducts);
customerRouter.get('/product/:id', getProductById);
customerRouter.get('/search/:query', searchProducts);

customerRouter.get('/featured-products', getFeaturedProduct);
customerRouter.get('/category/:category/:subCategory?', getProductsByCategory);
customerRouter.patch('/customer/:id', updateCustomerById);

customerRouter.post('/place-order', placeOrder);
customerRouter.get('/customer/:id', auth, getCustomerById);
customerRouter.get('/orders/:id', auth, getOrdersByCustomer);

export default customerRouter;
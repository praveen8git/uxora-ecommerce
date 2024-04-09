import express from 'express';
import auth from '../middlewares/auth.js';
import isAdmin from '../middlewares/isAdmin.js';

import { addProduct, deleteProductById } from '../controllers/productController.js';
import { deleteOrderById, getAllOrders, getOrderById, getOrdersByStatus, getTodaysOrders, getTodaysRevenue, getTotalOrder, getTotalRevenue, updateOrderById } from '../controllers/orderController.js';
import { deleteCustomerById, getAllCustomers, getNewCustomersCount, getTotalCustomer, updateCustomerById } from '../controllers/customerController.js';

const adminRouter = express.Router();

adminRouter.post('/add-product', auth, isAdmin, addProduct);
adminRouter.delete('/delete-product/:id', auth, isAdmin, deleteProductById);
adminRouter.get('/all-orders', auth, isAdmin, getAllOrders);

adminRouter.get('/order/:id', auth, isAdmin, getOrderById); // order details api
adminRouter.get('/total-orders', auth, isAdmin, getTotalOrder); // dashboard api
adminRouter.get('/orders/:status', auth, isAdmin, getOrdersByStatus); // dashboard api

adminRouter.get('/todays-orders', auth, isAdmin, getTodaysOrders); //dashboard api
adminRouter.get('/total-revenue', auth, isAdmin, getTotalRevenue); //dashboard api
adminRouter.get('/todays-revenue', auth, isAdmin, getTodaysRevenue); //dashboard api

adminRouter.patch('/order/:id', auth, isAdmin, updateOrderById); // order update api
adminRouter.delete('/order/:id', auth, isAdmin, deleteOrderById); // order details page
adminRouter.get('/all-customers', getAllCustomers); // customers table

adminRouter.get('/total-customers', auth, isAdmin, getTotalCustomer); // dashboard api
adminRouter.get('/new-customers', auth, isAdmin, getNewCustomersCount); // dashboard api
adminRouter.delete('/delete-customer/:id', auth, isAdmin, deleteCustomerById); // customer details page

// adminRouter.patch('/customer/:id', auth, isAdmin, updateCustomerById); // customer details page



export default adminRouter;
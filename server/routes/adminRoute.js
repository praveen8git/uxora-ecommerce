import express from 'express';
// import auth from '../middlewares/auth.js';
import { addProduct, deleteProductById } from '../controllers/productController.js';

const adminRouter = express.Router();

adminRouter.post('/add-product', addProduct);
adminRouter.post('/delete-product/:id', addProduct);

export default adminRouter;
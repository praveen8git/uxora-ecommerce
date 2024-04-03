import express from 'express';
// import auth from '../middlewares/auth.js';
import { addProduct } from '../controllers/productController.js';

const adminRouter = express.Router();

adminRouter.post('/add-product', addProduct);

export default adminRouter;
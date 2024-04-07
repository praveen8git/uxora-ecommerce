import express from 'express';
import { isLoggedIn, login, logout } from '../controllers/authController.js';
import auth from '../middlewares/auth.js';

const authRouter = express.Router();

authRouter.get('/is-logged-in', auth, isLoggedIn);
authRouter.post('/login', login);
authRouter.get('/logout', logout);

export default authRouter;
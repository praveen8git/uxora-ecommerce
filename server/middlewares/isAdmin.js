import auth from './auth.js';

const isAdmin = async (req, res, next) => {
    // First, ensure the request is authenticated
    await auth(req, res, () => {}); // Pass an empty function as next since we're not calling next() here

    // Check if the user is an admin
    if (req.user && req.user.role === 'admin') {
        next(); // Proceed to the next middleware or route handler
    } else {
        res.status(403).json({ success: false, message: "You do not have permission to access this resource." });
    }
}

export default isAdmin;
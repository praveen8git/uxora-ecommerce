import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

const auth = async (req, res, next) => {

    const { token } = req.cookies;
    // console.log('auth:token',token);

    if (!token) {
        res.status(403).json({ success: false, message: "Please login first!" });
        return
    }

    try {
        const decodedToken = jwt.verify(token, JWT_SECRET);
        req.user = decodedToken;

    } catch (error) {
        console.error(error);
        res.status(403).json({ success: false, message: "Invalid token!" });
        return
    }

    next();

}

export default auth;
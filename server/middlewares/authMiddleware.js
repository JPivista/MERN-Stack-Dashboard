const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const errorResponse = (res, statusCode, message) => {
    return res.status(statusCode).json({ success: false, message });
};

// Middleware to verify JWT and protect routes
const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.error(error.message);
            return errorResponse(res, 401, 'Token expired or invalid, please log in again');
        }
    } else {
        return errorResponse(res, 401, 'Not authorized, no token');
    }
};

// Middleware to handle role-based access
const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return errorResponse(res, 403, 'Not authorized for this role');
        }
        next();
    };
};

module.exports = { protect, authorizeRoles };

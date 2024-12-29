const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
    if (!token) {
        console.log('No token provided');
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlackListed = await userModel.findOne({token:token});
    if (isBlackListed) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded user ID:', decoded._id);
        const user = await userModel.findById(decoded._id);
        req.user = user;
        next();
    } catch (error) {
        console.log('Error verifying token:', error);
        return res.status(401).json({ message: 'Unauthorized' });
    }
}
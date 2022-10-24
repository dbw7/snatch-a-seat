const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            throw new Error("Authentication failed");
        }
        const decodedToken = jwt.verify(token, secretOrPublicKey, options);
        req.userData = {userId: decodedToken.userId};
        next();
    } catch (err) {
        console.log(err);
        const error = "Authentication Failed";
        return next(error);
    }
}
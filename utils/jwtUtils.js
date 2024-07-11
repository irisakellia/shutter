const jwt = require('jsonwebtoken');
const {secretKey} = require('../shutter_log/dbconnection/jwtconfig')

function generateToken(){
const payload = {
    id:user._id,
    email:user.email,
    password:user.password,
}
return jwt.sign(payload, secretKey, {expiresIn:"1h"});
}

module.exports = {generateToken}
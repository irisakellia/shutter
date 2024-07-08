const bcrypt = require('bcrypt')
const User = require('../models/User')
const {generateToken} = require('../utils/jwtUtils')

async function login(email,password){
    try {
        const existingUser = User.findOne({email});

        if(!existingUser){
            console.error("user does not exist in my database")
        }
const isPasswordValid = bcrypt.compare(password , existingUser.password);
if(!isPasswordValid){
    console.error("the password is invalid")

}
const token = generateToken(existingUser);
return token ;

    } catch (error) {
        res.status(400).json({success:false,message:"login failed"})
    }

}

module.exports = {login}
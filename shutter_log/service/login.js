const bcrypt = require('bcrypt')
const User = require('../models/User')
const {generateToken} = require('../utils/jwtUtils')

async function login(email,password){
    try {
        const existingUser = await  User.findOne({email});

        if(!existingUser){
            throw new Error("user does not exist ")
        }
const isPasswordValid = await bcrypt.compare(password , existingUser.password);
if(!isPasswordValid){
    throw new Error("the password is invalid")

}
const token = generateToken(existingUser);
return token ;

    } catch (error) {
        console.log("login eror", error.message)
        throw new Error("Invalid credentials")
    }

}

module.exports = {login}
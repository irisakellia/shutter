const user = require("../models/User");
const bcrypt = require("bcrypt");

async function createUser(name, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const createdUser = new user({
    name,
    email,
    password: hashedPassword,
  });

  const savedUser = await createdUser.save();
  return savedUser;
}

module.exports = { createUser };

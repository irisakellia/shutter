const User = require("../models/User");
const bcrypt = require("bcrypt");

async function createUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res
      .status(200)
      .json({
        success: true,
        message: `user ${newUser.name} created successfully`,
      });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "can not create the user" });
  }
}

module.exports = { createUser };

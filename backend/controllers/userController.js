import dotenv from "dotenv";
dotenv.config();
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User doesn't exist." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = createToken(user._id);
    res.json({ success: true, message: "Loged In.", token });
  } catch (error) {
    console.log("Login ", error);
    res.json({ success: false, message: "Please try again !" });
  }
};

// register
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // check is user exists ?
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists !" });
    }

    // validate email
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please email a valid email.",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password.",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, message: "Register successfull.", token });
  } catch (error) {
    console.log("register user", error);
    res.json({ success: false, message: "Error ! Please try again!" });
  }
};

export { loginUser, registerUser };

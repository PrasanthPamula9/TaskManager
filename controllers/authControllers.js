const { client } = require("../config/db");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const dbName = "test";
const collectionName = "users";
// const secretKey = process.env.JWT_SECRET_KEY;
const users = ()=> client().collection("users");

// const register = async (req, res) => {
//   const { username, password } = req.body;
//   const db = client.db(dbName);
//   const collection = db.collection(collectionName);
//   const existingUser = await collection.findOne({ username });
//   if (existingUser) {
//     return res.status(400).json({ message: "Username already exists" });
//   }
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const newUser = { username, password: hashedPassword };
//   await collection.insertOne(newUser);
//   res.status(201).json({ message: "User registered successfully" });
// };

// const login = async (req, res) => {
//   const { username, password } = req.body;
//   const db = client.db(dbName);
//   const collection = db.collection(collectionName);
//   const user = await collection.findOne({ username });
//   if (!user) {
//     return res.status(401).json({ message: "Invalid username or password" });
//   }
//   const isPasswordValid = await bcrypt.compare(password, user.password);
//   if (!isPasswordValid) {
//     return res.status(401).json({ message: "Invalid username or password" });
//   }
//   const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "1h" });
//   res.status(200).json({ token });
// };

// const logout = (req, res) => {

//   res.status(200).json({ message: "Logout successful" });
// };
module.exports = { register, login };
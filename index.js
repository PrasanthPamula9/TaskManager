// import express from "express";
const express = require("express");
const { connectToDatabase, client } = require("./config/db");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  await connectToDatabase();
  res.send("Hello CodeSandbox!");
});

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});

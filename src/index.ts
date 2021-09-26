import express from "express";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.SERVER_PORT;

const app = express();

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

import express from "express";
import dotenv from 'dotenv';
import connectToDb from "./config/database.js";
dotenv.config({

})
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World! chat application!");
});

app.listen(port, () => {
    connectToDb()
  console.log(`Example app listening on port ${port}`);
});

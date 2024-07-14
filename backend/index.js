import express from "express";
import dotenv from "dotenv";
import connectToDb from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";

dotenv.config({});
const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World! chat application!");
});

app.listen(port, () => {
  connectToDb();
  console.log(`Example app listening on port ${port}`);
});

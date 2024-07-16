import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDb from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/messageRoute.js";
import isAuthenticated from "./middleware/isAuthentication.js";


dotenv.config({});
const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOption={
  origin:'http://localhost:3000',
  credentials:true
};
app.use(cors(corsOption)); 

// routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message",isAuthenticated,messageRoute);


app.get("/", (req, res) => {
  res.send("Hello World! chat application!");
});

app.listen(port, () => {
  connectToDb();
  console.log(`Example app listening on port ${port}`);
});

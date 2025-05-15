import express from "express";
import 'express-async-errors';
const app = express();
app.use(express.json());
import morgan from "morgan";

import * as dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
//Job route

import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';



dotenv.config();

import { body } from "express-validator";
import cloudinary from 'cloudinary';




const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, './public')))
//middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import {authenticateUser} from "./middleware/authMiddleware.js";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});



if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get('/api/v1/test', (req, res) => {
  res.json({ message: "test route" });
})

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);

app.get('*', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './public',  'index.html'))
})
//404 error middleware

app.use("*", (req, res) => {
  res.status(404).json({ message: "route not found BOI " });
});
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;
//connecting to database

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server running on port ${port}.....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

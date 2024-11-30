import dotenv from "dotenv";
dotenv.config()
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
// import jwt from jsonwebtoken;
import connectDB from "./src/db/index.js";


const app = express();


app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.get('/' , (req , res) => {
    res.send("Hello World");
});
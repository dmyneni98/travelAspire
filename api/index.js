import express, { application } from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import dealsRoute from "./routes/deals.js";
import cors from "cors";

const app= express();
const connect = async()=>{
    try {
        await mongoose.connect("mongodb+srv://survey:Survey2022@cluster0.xj1qz7u.mongodb.net/survey?retryWrites=true&w=majority");
        //await mongoose.connect(process.env.mongocon)
        console.log("First DB Connection")
      } catch (error) {
        throw error
      } 
    };
mongoose.connection.on("disconnected", ()=>{
        console.log("Disconnected!")
        });
        //app.use(cors())
        //app.use(cookieParser())
app.use(express.json()); 
app.use(cors())       
app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/deals", dealsRoute);      

app.get("/",(req,res)=> {
  res.send("welcome back!!!")
});

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
      
app.listen(8800,()=>{
    connect()
    console.log("welcome")
});
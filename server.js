import express from "express";
import envData from "./config/env.js";
import connectDb from "./config/db.js";
import productRoute from "./route/productRoute.js"
import cors from "cors";

const corsOptions ={
    origin:"*"
}


connectDb();


const app = express();


app.use(cors(corsOptions));



app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.use("/api",productRoute);


app.listen(3000,()=>{
    console.log("server On");
});

export default app;
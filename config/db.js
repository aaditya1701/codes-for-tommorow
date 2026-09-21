import mongoose from "mongoose";
import  envData  from "../config/env.js";

const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
    dbName: envData.dbName,
};

export default async function connectDb() {
    try {
        await mongoose.connect(envData.mongoDBURL, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log(`MongoDB connected successfully: ${mongoose.connection.name}`);
    } catch (err) {
        console.error("MongoDB connection failed:", err.message);
        throw err;
    }
}
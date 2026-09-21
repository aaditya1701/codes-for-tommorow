import dotenv from "dotenv";

dotenv.config();

const envData={
    "dbName":process.env.DBNAME,
    "mongoDBURL":process.env.MONGODB_URL,
    "port":process.env.PORT
}

console.log(envData);

export default envData;

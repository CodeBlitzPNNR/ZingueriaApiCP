import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_STRING = process.env.MONGODB_STRING;

console.log("MONGODB_STRING:", MONGODB_STRING);

await mongoose.connect(MONGODB_STRING, { useNewUrlParser: true, useUnifiedTopology: true });


export { ClientesManager } from '../models/clientesManager.js'
export { PresupuestosManager } from '../models/presupuestosManager.js'
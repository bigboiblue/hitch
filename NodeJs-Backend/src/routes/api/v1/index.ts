import { Router } from "express";
import mongoose from "mongoose";
const router = Router();

const MONGO_IP = "mongodb"; //docker-compose adds service link as ip in hosts
const MONGO_PORT = "27017";
const DB_URL = `mongodb://${MONGO_IP}:${MONGO_PORT}`;
console.log(`Connecting to ${DB_URL}/hitch`);
mongoose.connect(`${DB_URL}/hitch`, { useNewUrlParser: true, useUnifiedTopology: true });

const flagsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    isEnabled: { type: Boolean, required: true },
    dateCreated: { type: Date, required: true, default: Date.now },
}, { versionKey: false });

const flags = mongoose.model("flag", flagsSchema);

router.use("/", async (request, response) => {
    response.type("application/json");
    response.send(JSON.stringify(await flags.find().exec(), null, 2));
    response.end();
});

export default router;


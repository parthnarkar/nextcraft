import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already connected to database");
        return;
    }

    try {
        const uri = process.env.MONGO_URI;

        if (!uri) {
            throw new Error("MONGO_URI is missing from environment variables");
        }

        const db = await mongoose.connect(uri);

        connection.isConnected = db.connections[0].readyState

        console.log("DB CONNECTED SUCCESSFULLY");
    } catch (error) {
        console.log("DB Connection Failed", error);
        // process.exit(1);
        throw error;
    }
}

export default dbConnect;
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function PUT() {
    mongoose.connect(process.env.MONGO_URL);
    const data = await req.json()
    const session = await getServerSession();
    if('name' in data) {
        // update user name
    }
}
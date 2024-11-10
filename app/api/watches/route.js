import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        return NextResponse.json({ success: false, error: "MONGODB_URI is not defined" }, { status: 500 });
    }

    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db();
        const collection = db.collection("watch");

        // Retrieve all documents
        const allWatches = await collection.find().toArray();

        return NextResponse.json({ success: true, result: allWatches });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    } finally {
        await client.close();
    }
}

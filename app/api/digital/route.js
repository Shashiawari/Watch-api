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

        // Retrieve the Digital array
        const document = await collection.findOne({}, { projection: { Digital: 1, _id: 0 } });

        if (!document || !document.Digital) {
            return NextResponse.json({ success: false, error: "No digital watches found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, result: document.Digital });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    } finally {
        await client.close();
    }
}

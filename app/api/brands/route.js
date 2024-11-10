import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const brandname = searchParams.get("brandname");
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        return NextResponse.json({ success: false, error: "MONGODB_URI is not defined" }, { status: 500 });
    }

    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db();
        const collection = db.collection("watch");

        // Query for specific brand
        const brandMap = {
            noise: "Noise",
            fastrack: "Fastrack",
            titan: "Titan",
            fossil: "Fossil",
        };

        // Check if the brand is valid
        const brandKey = brandMap[brandname?.toLowerCase()];
        if (!brandKey) {
            return NextResponse.json({ success: false, error: "Invalid brand name" }, { status: 400 });
        }

        // Retrieve all documents and filter by the specified brand
        const documents = await collection.find({}).toArray();
        
        // Filter the watches of the specified brand
        const brandWatches = documents.flatMap(doc => doc[brandKey] || []);

        if (brandWatches.length === 0) {
            return NextResponse.json({ success: false, error: `No ${brandname} watches found` }, { status: 404 });
        }

        return NextResponse.json({ success: true, result: brandWatches });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    } finally {
        await client.close();
    }
}

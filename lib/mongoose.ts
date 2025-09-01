import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "";

if (!MONGO_URI) {
	console.warn("MONGO_URI not set; mongoose will fail if used without it.");
}

interface GlobalWithMongooseCache {
	mongooseCache?: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
}

const globalWithCache = global as unknown as GlobalWithMongooseCache;

let cached = globalWithCache.mongooseCache;
if (!cached) {
	cached = globalWithCache.mongooseCache = { conn: null, promise: null };
}

export async function connectMongoose() {
	if (cached!.conn) return cached!.conn;
	if (!cached!.promise) {
		cached!.promise = mongoose.connect(MONGO_URI).then((m) => m);
	}
	cached!.conn = await cached!.promise;
	return cached!.conn;
}



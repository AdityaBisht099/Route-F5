import { MongoClient } from "mongodb";

declare global {
	// eslint-disable-next-line no-var
	var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = process.env.MONGO_URI || "";
if (!uri) {
	throw new Error(
		"MONGO_URI is not set. Add it to .env.local. It must start with 'mongodb://' or 'mongodb+srv://'."
	);
}
if (!/^mongodb(\+srv)?:\/\//.test(uri)) {
	throw new Error(
		"Invalid MONGO_URI. Expected it to start with 'mongodb://' or 'mongodb+srv://'."
	);
}

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
	if (!global._mongoClientPromise) {
		client = new MongoClient(uri, options);
		global._mongoClientPromise = client.connect();
	}
	clientPromise = global._mongoClientPromise as Promise<MongoClient>;
} else {
	client = new MongoClient(uri, options);
	clientPromise = client.connect();
}

export default clientPromise;



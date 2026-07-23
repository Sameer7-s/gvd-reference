import { MongoClient, Db } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI ?? "mongodb://localhost:27017";
const DB_NAME = "gvd_reference";

// In development Next.js hot-reloads frequently, so we cache the client on
// the global object to avoid opening new connections on every reload.
declare global {
  // eslint-disable-next-line no-var
  var _mongoClient: MongoClient | undefined;
}

// Fail fast when the DB is unreachable so public pages that read from Mongo
// (with a static fallback) never hang on the request path.
const options = { serverSelectionTimeoutMS: 5000, connectTimeoutMS: 5000 };

let client: MongoClient;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(MONGODB_URI, options);
  }
  client = global._mongoClient;
} else {
  client = new MongoClient(MONGODB_URI, options);
}

export async function getDb(): Promise<Db> {
  // Fail loudly on a misconfigured deploy instead of silently connecting to
  // localhost (which would surface as confusing empty data / 500s in prod).
  if (!process.env.MONGODB_URI && process.env.NODE_ENV === "production") {
    throw new Error("MONGODB_URI is not set");
  }
  await client.connect();
  return client.db(DB_NAME);
}

export { client };

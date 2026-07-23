import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI_NEW || process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI_NEW environment variable inside .env.local"
  );
}

// Global caching for Mongoose instance across hot-reloads in development
declare global {
  var mongoose: {
    conn: typeof import("mongoose") | null;
    promise: Promise<typeof import("mongoose")> | null;
  };
}

<<<<<<< HEAD
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      family: 4, // Force IPv4 to fix querySrv ECONNREFUSED on some networks
    };

    cached.promise = mongoose.connect(MONGODB_URI as string, opts).then((mongoose) => {
      return mongoose;
    });
  }
  
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

// Helper to get db instance (for compatibility if needed, though mostly we use mongoose models)
export async function getDb() {
  const mongooseInstance = await connectToDatabase();
  return mongooseInstance.connection.db;
=======
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
>>>>>>> 302b5cae1d296bbcb3a5f4b1dba0b13b3da2befd
}

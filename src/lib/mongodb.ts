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
}

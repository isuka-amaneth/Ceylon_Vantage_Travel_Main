import { MongoClient } from "mongodb";

// In dev, Next.js hot-reloads modules on every save. Without a cache,
// each reload would open a brand new MongoDB connection and eventually
// exhaust the connection pool. Stashing the client promise on the global
// object survives the hot-reload and reuses the same connection.
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function createClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      "MONGODB_URI is not set. Add it to .env.local (dev) or your hosting " +
        "provider's environment variables (production). See .env.example."
    );
  }

  return new MongoClient(uri).connect();
}

/**
 * Returns a cached MongoClient connection promise. The URI is only read
 * and validated the first time this is actually called (i.e. on a real
 * request) -- not at module import time -- so `next build` succeeds even
 * before MONGODB_URI is configured.
 */
export default function getMongoClient(): Promise<MongoClient> {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = createClientPromise();
    }
    return global._mongoClientPromise;
  }
  return createClientPromise();
}

// Database name lives here so it's changed in exactly one place.
export const DB_NAME = "ceylon_vantage";

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// MongoClient কানেকশনটি গ্লোবাল রাখার চেষ্টা করুন যাতে বারবার কানেক্ট না হয়
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("suncart");

export const auth = betterAuth({
  database: mongodbAdapter(db), // এখানে শুধু db পাস করলেই হয় অনেক সময়
  emailAndPassword: {
    enabled: true,
    // ডাইনামিক ইমেজ বা অন্যান্য ডাটা সেভ করার জন্য
    user: {
      additionalFields: {
        image: {
          type: "string",
          required: false,
        },
      },
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
});

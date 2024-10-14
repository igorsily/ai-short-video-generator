import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" }); // or .env.local

const connectionString: string = process.env.DATABASE_URL!;

const sql = neon(connectionString);
export const db = drizzle(sql);

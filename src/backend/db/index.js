import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema.js";
import dotenv from "dotenv";

dotenv.config();

const sql = postgres(process.env.DATABASE_URL, { ssl: "require" });

export const db = drizzle(sql, { schema });

import path from "path";
import { config } from "dotenv";

// Load .env from this package's directory (works regardless of app cwd)
config({ path: path.resolve(__dirname, ".env") });

import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString || typeof connectionString !== "string") {
  throw new Error(
    "DATABASE_URL must be set. Add it to packages/db/.env or set it in your environment."
  );
}

const adapter = new PrismaPg({ connectionString });
export const client = new PrismaClient({ adapter });


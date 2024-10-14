import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: ".env.local" });
export default defineConfig({
  out: "./src/drizzle/migrations",
  dialect: "postgresql",
  schema: "./src/drizzle/schemas.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  schemaFilter: "public",
  tablesFilter: "*",
  introspect: {
    casing: "camel",
  },
  migrations: {
    prefix: "timestamp",
    table: "__drizzle_migrations__",
    schema: "public",
  },
  breakpoints: true,
  strict: true,
  verbose: true,
});

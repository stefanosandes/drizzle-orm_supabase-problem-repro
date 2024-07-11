import type { Config } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
	throw Error("❌ DATABASE_URL not defined!");
}

export default {
	dialect: "postgresql",
	schema: "./schema.ts",
	out: "./migrations",
	dbCredentials: { url: process.env.DATABASE_URL },
	verbose: true,
	strict: true,
} satisfies Config;

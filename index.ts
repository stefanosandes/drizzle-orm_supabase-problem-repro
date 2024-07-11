import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const client = postgres(process.env.DATABASE_URL as string);
export const db = drizzle(client, { schema });

const users = await db.query.users.findMany({
	with: { posts: true },
});
console.log(users);

process.exit(1);

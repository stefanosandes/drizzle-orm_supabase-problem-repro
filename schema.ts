import { relations } from "drizzle-orm";
import { pgEnum, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const userRole = pgEnum("user-role", ["admin", "moderator", "visitor"]);

export const users = pgTable("users", {
	id: serial("id").primaryKey(),
	fullName: text("full_name"),
	phone: varchar("phone", { length: 256 }),
	role: userRole("kind"),
});

export const userRelations = relations(users, ({ many }) => ({
	posts: many(posts),
}));

export const posts = pgTable("posts", {
	id: serial("id").primaryKey(),
	createdBy: serial("user_id"),
	title: text("title"),
	content: text("content"),
});

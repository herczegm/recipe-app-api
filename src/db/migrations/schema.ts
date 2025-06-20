import { pgTable, serial, integer, text, timestamp } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const favorites = pgTable("favorites", {
	id: serial().primaryKey().notNull(),
	userId: integer("user_id").notNull(),
	recipeId: integer("recipe_id").notNull(),
	title: text().notNull(),
	image: text(),
	cookTime: text("cook_time"),
	servings: text(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
});

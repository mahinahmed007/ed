import { pgTable, serial, varchar, integer, timestamp } from "drizzle-orm/pg-core";

export const results = pgTable("results", {
  id: serial("id").primaryKey(),
  topic: varchar("topic", { length: 50 }),
  level: varchar("level", { length: 20 }),
  score: integer("score"),
  total: integer("total"),
  createdAt: timestamp("created_at").defaultNow(),
});

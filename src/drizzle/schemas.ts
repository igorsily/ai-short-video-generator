import {
  boolean,
  index,
  json,
  pgTable,
  text,
  unique,
  varchar,
} from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const Users = pgTable(
  "users",
  {
    id: text("id")
      .$defaultFn(() => createId())
      .primaryKey(),
    name: varchar("name", { length: 50 }).notNull(),
    email: varchar("email", { length: 50 }).notNull(),
    imageUrl: varchar("image_url").notNull(),
    subscription: boolean("subscription").default(false),
  },
  (table) => {
    return {
      nameIdx: index("name_idx").on(table.name),
      emailIdx: index("email_idx").on(table.email),
      emailUnique: unique("email_unique").on(table.email),
    };
  },
);

export const Videos = pgTable(
  "videos",
  {
    id: text("id")
      .$defaultFn(() => createId())
      .primaryKey(),
    script: json("script").notNull(),
    audioUrl: varchar("audio_url").notNull(),
    captions: json("captions").notNull(),
    images: varchar("images").array(),
    createdBy: varchar("created_by").notNull(),
  },
  (table) => {
    return {
      createdByIdx: index("created_by_idx").on(table.createdBy),
    };
  },
);

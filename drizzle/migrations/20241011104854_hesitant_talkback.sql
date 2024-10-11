CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"email" varchar(50) NOT NULL,
	"image_url" varchar NOT NULL,
	"subscription" boolean DEFAULT false,
	CONSTRAINT "email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "users" USING btree ("name");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "email_idx" ON "users" USING btree ("email");
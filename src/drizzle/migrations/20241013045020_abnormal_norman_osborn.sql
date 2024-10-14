CREATE TABLE IF NOT EXISTS "videos" (
	"id" text PRIMARY KEY NOT NULL,
	"script" json NOT NULL,
	"audio_url" varchar NOT NULL,
	"captions" json NOT NULL,
	"images" varchar[],
	"created_by" varchar NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "created_by_idx" ON "videos" USING btree ("created_by");

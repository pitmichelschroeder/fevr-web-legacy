-- Drop the old counter table
DROP TABLE "counter";

-- Create the new waitlist table
CREATE TABLE "waitlist" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"first_name" varchar(100),
	"last_name" varchar(100),
	"is_vr_owner" boolean DEFAULT false,
	"vr_headset" varchar(100),
	"referral_code" varchar(50),
	"is_email_verified" boolean DEFAULT false,
	"waitlist_position" serial,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

-- Add unique constraint on email
ALTER TABLE "waitlist" ADD CONSTRAINT "waitlist_email_unique" UNIQUE("email");
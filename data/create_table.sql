BEGIN;

DROP TABLE IF EXISTS "users","reservations","rooms","roles" ;


CREATE TABLE "rooms"(
"id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"name" TEXT NOT NULL ,
"capacity" INTEGER NOT NULL,
"created_at" timestamptz NOT NULL DEFAULT now(),
"updated_at" timestamptz
);


CREATE TABLE "reservations"(
"id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

"start_time" DATE NOT NULL,
"end_time" DATE NOT NULL,
"rooms_id" INTEGER NOT NULL REFERENCES "rooms"("id"),
"created_at" timestamptz NOT NULL DEFAULT now(),
"updated_at" timestamptz
);

CREATE TABLE "roles"(
"id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"name" TEXT NOT NULL
);

CREATE TABLE "users"(
"id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
"first_name" TEXT NOT NULL,
"last_name" TEXT NOT NULL,
"password" TEXT NOT NULL,
"roles_id" INTEGER NOT NULL REFERENCES "roles"("id"),
"reservations_id" INTEGER NOT NULL REFERENCES "reservations"("id"),
"created_at" timestamptz NOT NULL DEFAULT now(),
"updated_at" timestamptz
);

INSERT INTO "rooms" ("name","capacity") VALUES
('dancing',15),
('opera',100);

INSERT INTO "reservations" ("start_time","end_time","rooms_id") VALUES
('2023-05-15','2023-05-16',1),
('2023-05-16','2023-05-17',2);

INSERT INTO "roles" ("name") VALUES
('visiteur'),
('administrateur'),
('menber');

INSERT INTO "users" ("first_name","last_name","password","roles_id","reservations_id") VALUES
('test','test','test',2,1);

COMMIT;
CREATE TABLE "users" (
  "id" INT PRIMARY KEY,
  "name" VARCHAR(255),
  "email" VARCHAR(100)
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "amount" DECIMAL(10,2), -- 000000000.00
  "user_id" INT,
  "created_at" DATE,

  FOREIGN KEY ("user_id") REFERENCES "users" ("id")
);

----------------------------------------

INSERT INTO "users" ("id", "name", "email")
 VALUES 
  (1, 'John Doe', 'john.doe@example.com'),
  (2, 'Jane Smith', 'jane.smith@example.com'),
  (3, 'Alice Johnson', 'alice.johnson@example.com');

INSERT INTO "orders" ("created_at", "amount", "user_id")
 VALUES 
  ('2024-07-01', 100.50, 1),
  ('2024-07-02', 150.00, 2),
  ('2024-07-03', 200.75, 1),
  ('2024-07-04', 50.25, 3);

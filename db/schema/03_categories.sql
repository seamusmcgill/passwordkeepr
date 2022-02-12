-- Drop and recreate Categories table
DROP TABLE IF EXISTS categories CASCADE;
CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  creator_id REFERENCES users(id),
  name VARCHAR(255),
  description TEXT,
);

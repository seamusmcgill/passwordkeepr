-- Drop and create organizations table

DROP TABLE IF EXISTS organizations CASCADE;
CREATE TABLE organizations (
  id SERIAL PRIMARY KEY NOT NULL,
  admin_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  organization_url VARCHAR(255),
  description TEXT,
  logo_url VARCHAR(255)
);

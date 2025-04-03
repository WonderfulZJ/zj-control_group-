-- Create the restaurants table
CREATE TABLE restaurants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    opening_hours JSONB NOT NULL -- Stores structured opening hours data
);

-- Create the collections table
CREATE TABLE collections (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL -- Allow duplicate names for simplicity
);

-- Create the collection_restaurants table to link collections and restaurants
CREATE TABLE collection_restaurants (
    id SERIAL PRIMARY KEY,
    collection_id INT NOT NULL REFERENCES collections(id) ON DELETE CASCADE,
    restaurant_id INT NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE
);
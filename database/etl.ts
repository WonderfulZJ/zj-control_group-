import fs from 'fs';
import csvParser from 'csv-parser';
import { Pool } from 'pg';

// PostgreSQL connection setup
const pool = new Pool({
  user: 'your_username', // Replace with your PostgreSQL username
  host: 'localhost',
  database: 'restaurant_app', // Replace with your database name
  password: 'your_password', // Replace with your PostgreSQL password
  port: 5432,
});

// Function to parse and load CSV data
async function importRestaurants(csvFilePath: string) {
  const client = await pool.connect();
  try {
    const restaurants: { name: string; opening_hours: any }[] = [];

    // Parse CSV
    fs.createReadStream(csvFilePath)
      .pipe(csvParser())
      .on('data', (row) => {
        const { name, opening_hours } = row;
        restaurants.push({
          name,
          opening_hours: JSON.stringify(opening_hours), // Convert to JSONB format
        });
      })
      .on('end', async () => {
        console.log('CSV file successfully processed.');

        // Insert data into the database
        for (const restaurant of restaurants) {
          await client.query(
            'INSERT INTO restaurants (name, opening_hours) VALUES ($1, $2)',
            [restaurant.name, restaurant.opening_hours]
          );
        }
        console.log('Data successfully imported into the database.');
      });
  } catch (error) {
    console.error('Error during ETL process:', error);
  } finally {
    client.release();
  }
}

// Run the ETL process
importRestaurants('restaurant_details.csv');
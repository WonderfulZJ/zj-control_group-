import express from 'express';
import * as bodyParser from 'body-parser';
import restaurantRoutes from './routes/restaurants';
import collectionRoutes from './routes/collections';

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/collections', collectionRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
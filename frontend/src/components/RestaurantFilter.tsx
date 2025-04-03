import React, { useState } from 'react';
import { fetchRestaurants } from '../api';

const RestaurantFilter: React.FC = () => {
  const [name, setName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [restaurants, setRestaurants] = useState<{ id: string; name: string }[]>([]);

  const handleSearch = async () => {
    const results = await fetchRestaurants(name, dateTime);
    setRestaurants(results);
  };

  return (
    <div>
      <h2>Filter Restaurants</h2>
      <input
        type="text"
        placeholder="Restaurant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantFilter;
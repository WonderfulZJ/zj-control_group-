import React from 'react';
import RestaurantFilter from './components/RestaurantFilter';
import CollectionManager from './components/CollectionManager';

const App: React.FC = () => {
  return (
    <div>
      <h1>Restaurant Finder</h1>
      <RestaurantFilter />
      <CollectionManager />
    </div>
  );
};

export default App;
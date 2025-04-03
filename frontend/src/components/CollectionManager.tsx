import * as React from 'react';
import { useState } from 'react';
import { createCollection, fetchCollections } from '../api';

const CollectionManager: React.FC = () => {
  const [name, setName] = useState('');
  const [collections, setCollections] = useState<{ id: string; name: string }[]>([]);

  const handleCreate = async () => {
    await createCollection(name);
    const updatedCollections = await fetchCollections();
    setCollections(updatedCollections);
    setName('');
  };

  return (
    <div>
      <h2>Manage Collections</h2>
      <input
        type="text"
        placeholder="Collection Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleCreate}>Create Collection</button>
      <ul>
        {collections.map((collection) => (
          <li key={collection.id}>{collection.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionManager;
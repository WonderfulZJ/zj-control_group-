export const fetchRestaurants = async (name: string, dateTime: string) => {
  const response = await fetch(`/api/restaurants?name=${name}&dateTime=${dateTime}`);
  return response.json();
};

export const fetchCollections = async () => {
  const response = await fetch('/api/collections');
  return response.json();
};

export const createCollection = async (name: string) => {
  await fetch('/api/collections', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });
};
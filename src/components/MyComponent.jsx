import React, { useEffect, useState } from 'react';
import { fetchData } from '../api/api.js'; // Sesuaikan path dengan struktur proyek Anda

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const apiData = await fetchData();
        setData(apiData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
      <h1>Data from API:</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default MyComponent;

import React, { useState, useEffect } from 'react';
import BeerList from './components/BeerList';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('id');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.sampleapis.com/beers/ale')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setBeers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  const sortedBeers = [...beers].sort((a, b) => {
    if (sortOption === 'id') {
      return a.id - b.id;
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  const filteredBeers = sortedBeers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Beer List</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="border border-gray-300 rounded px-3 py-2 mb-8"
      />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <BeerList beers={filteredBeers} />
      )}
    </div>
  );
}

export default App;

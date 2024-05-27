// App.js
import React, { useState, useEffect } from 'react';
import BeerList from './components/BeerList';

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('id');

  useEffect(() => {
    fetch('https://api.sampleapis.com/beers/ale')
      .then(response => response.json())
      .then(data => setBeers(data))
      .catch(error => console.error('Error fetching data:', error));
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

  const filteredBeers = beers.filter(beer =>
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
      <BeerList beers={filteredBeers} />
    </div>
  );
}

export default App;

import React from 'react';
import BeerCard from './BeerCard';

function BeerList({ beers }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {beers.map(beer => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
}

export default BeerList;

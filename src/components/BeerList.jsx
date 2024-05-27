
import React from 'react';
import BeerCard from './BeerCard';

function BeerList({ beers }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {beers.map(beer => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
}

export default BeerList;

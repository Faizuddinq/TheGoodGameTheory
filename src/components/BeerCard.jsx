import React from 'react';

function BeerCard({ beer }) {

    const calculateRatingStars = (rating) => {
        if (rating <= 100) {
          return '⭐';
        } else if (rating <= 200) {
          return '⭐⭐';
        } else if (rating <= 300) {
          return '⭐⭐⭐';
        } else if (rating <= 400) {
          return '⭐⭐⭐⭐';
        } else {
          return '⭐⭐⭐⭐⭐';
        }
    };

    return (
        <div className="border border-gray-300 p-4 rounded bg-white shadow-md transition-transform duration-300 transform hover:scale-105 gap-2">
            <span className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> Product No.{beer.id}</span>
            <img src={beer.image} alt={beer.name} className="w-full h-32 object-cover mb-4" />
            <h2 className="text-lg font-bold mb-2">{beer.name}</h2>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> {beer.price}</span>
            <p className="text-sm text-gray-800">Rating: {calculateRatingStars(beer.rating.reviews)}</p>
        </div>
    );
}

export default BeerCard;

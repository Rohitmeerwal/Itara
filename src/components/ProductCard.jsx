import React from 'react';

const ProductCard = ({ imageUrl, title }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-transform hover:scale-105 h-80 w-72 relative m-5">
      <div className="aspect-w-9 aspect-h-16 relative">
        <img className="object-cover object-center w-full h-full" src={imageUrl} alt="Card" style={{ width: '400px', height: '400px' }} />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 transition-opacity flex justify-center items-center">
          <a href="mailto:itaraindia@gmail.com" className="text-white text-lg">Enquire Now</a>
        </div>
      </div>
      <div className="px-6 py-4 absolute bottom-0 left-0 w-full">
        <div className="font-bold text-xl text-white mb-2">{title}</div>
      </div>
    </div>
  );
};

export default ProductCard;

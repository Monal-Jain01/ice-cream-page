import React from 'react';

const IceCreamCard = ({ image, title, description, price }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-600">{description}</p>
                <p className="text-lg font-bold mt-2">{price}</p>
            </div>
        </div>
    );
};

export default IceCreamCard;


import React from 'react';

export default function HeroSection({ ice_cream }) {
  return (
    <div className="bg-black text-white p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center">Embark on a culinary journey of Delight!</h1>
      <p className="mb-8 max-w-xl text-center">
        Immerse Yourself in Our Artisan-Crafted Ice Cream Collection—Each Flavor a Story, Each Scoop an Unforgettable Chapter in Your Sweet Odyssey! 
        Indulge in a World of Imagination, Where Every Scoop Unveils a New Taste Adventure! Choose your favorite
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {ice_cream.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center text-black">
            <img src={item.image} alt={item.title} className="w-32 h-32 object-contain mb-4" />
            <h2 className="font-semibold text-lg">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
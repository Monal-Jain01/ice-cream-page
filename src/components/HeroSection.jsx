import React from "react";
import icecream from "../assets/icecream.png";

export default function HeroSection({ ice_cream, selected, setSelected }) {
  return (
    <div className="p-8 w-full ">
      <div className="flex md:flex-row   items-start justify-between gap-8">
        <div className="md:ml-40 mt-12">
          <img src={icecream} alt="" className="w-68 h-20 mb-6" />
          <h2 className="text-3xl font-bold mb-2 text-white">
            {selected.title}
          </h2>
          <p className="text-white max-w-md my-4">
            Embark on a culinary journey of Delight as You Immerse Yourself in
            Our Artisan-Crafted Ice Cream Collection—Each Flavor a Story, Each
            Scoop an Unforgettable Chapter in Your Sweet Odyssey!
          </p>
          <p className="text-white max-w-md my-4">
            Indulge in a World of Imagination, Where Every Scoop Unveils  a New
            Taste Adventure! Choose your favorite
          </p>

          <div className=" mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center">
            {ice_cream.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className="relative rounded w-13 h-10 m-4"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute -top-8 -translate-x-1/2 left-1/2  w-20 h-20 object-cover mb-2 hover:rotate-10 cursor-pointer hover:scale-125 transition-all duration-100"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="w-[50vw] md:h-[40vw]  h-[60vw] flex items-center justify-center mb-4">
          <img
            src={selected.image}
            alt={selected.title}
            className="w-full h-full transition- object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
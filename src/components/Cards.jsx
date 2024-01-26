import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ filteredItems }) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-7">
      {filteredItems.map((item) => (
        <div key={item.id}>
          <Link to={`/shop/${item.id}`}>
            <img src={item.image} alt="Product-images" className='mt-12 shadow-gray-400 shadow-xl mx:auto w-full hover:scale-105 transition-all duration-400'/>
          </Link>
          <div className=" mt-7 px-4 border border-slate-200 border-solid rounded-lg shadow-slate-400 shadow-sm">
            <h4 className="text-base font-semibold mb-2">{item.title}</h4>
            <div className="flex justify-between">
              <p className="text-black/50">{item.category}</p>
              <p className="font-semibold">${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

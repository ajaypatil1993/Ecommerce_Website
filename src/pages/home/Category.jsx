import React from 'react';
import { Link } from 'react-router-dom';

const companyLogo = [
  { id: 1, img: '/Images/brand-1.png' },
  { id: 2, img: '/Images/brand-2.png' },
  { id: 3, img: '/Images/brand-3.png' },
  { id: 4, img: '/Images/brand-4.png' },
  { id: 5, img: '/Images/brand-5.png' },
];

const Category = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-2 px-4 py-28">
      {/* brand logo */}
      <div className="flex items-center justify-around flex-wrap  gap-15 ">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="brand logo" />
          </div>
        ))}
      </div>

      {/* category grid */}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
        <p className="font-semibold uppercase md:-rotate-90 text-center text-Black md:p-1.5 p-2 inline-flex text-3xl">
          𝙴𝚡𝚙𝚕𝚘𝚛𝚎 𝚗𝚎𝚠 𝚊𝚗𝚍 𝚙𝚘𝚙𝚞𝚕𝚊𝚛 𝚜𝚝𝚢𝚕𝚎𝚜
        </p>
        <div>
          <Link to="/">
            <img
              src="/Images/img-1.png"
              alt="Model Image 1"
              className="w-full hover:scale-105 transition-all duration-200 shadow-gray-400 shadow-xl"
            />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">
              <img
                src="/Images/img-2.png"
                alt="Model Image 2"
                className="w-full hover:scale-105 transition-all duration-200 shadow-gray-400 shadow-xl"
              />
            </Link>
            <Link to="/">
              {' '}
              <img
                src="/Images/img-3.png"
                alt="Model Image 3"
                className="w-full hover:scale-105 transition-all duration-200 shadow-gray-400 shadow-xl"
              />
            </Link>
            <Link to="/">
              {' '}
              <img
                src="/Images/img-4.png"
                alt="Model Image 4"
                className="w-full hover:scale-105 transition-all duration-200 shadow-gray-400 shadow-xl"
              />
            </Link>
            <Link to="/">
              {' '}
              <img
                src="/Images/img-5.png"
                alt="Model Image 5"
                className="w-full hover:scale-105 transition-all duration-200 shadow-gray-400 shadow-xl"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

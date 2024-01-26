import React from 'react';
import { Link } from 'react-router-dom';

const Newsletters = () => {
  return (
    <div className="bg-gray-400 bg-opacity-25 xl:px-28 px-4 py-16">
      <h2 className="title mb-8">Follow products and discounts on Instagram</h2>

      {/* insta grid */}

      <div className="flex flex-wrap gap-4 items-center justify-center mb-20">
        <Link
          to="/"
          className="shadow-gray-400 shadow-xl hover:scale-105 transition-all duration-200"
        >
          <img src="../../src/assets/Images/Instagram/instagram-1.png" alt="" />
        </Link>
        <Link
          to="/"
          className="shadow-gray-400 shadow-xl hover:scale-105 transition-all duration-200"
        >
          <img src="../../src/assets/Images/Instagram/instagram-2.png" alt="" />
        </Link>
        <Link
          to="/"
          className="shadow-gray-400 shadow-xl hover:scale-105 transition-all duration-200"
        >
          <img src="../../src/assets/Images/Instagram/instagram-3.png" alt="" />
        </Link>
        <Link
          to="/"
          className="shadow-gray-400 shadow-xl hover:scale-105 transition-all duration-200"
        >
          <img src="../../src/assets/Images/Instagram/instagram-4.png" alt="" />
        </Link>
        <Link
          to="/"
          className="shadow-gray-400 shadow-xl hover:scale-105 transition-all duration-200"
        >
          <img src="../../src/assets/Images/Instagram/instagram-5.png" alt="" />
        </Link>
        <Link
          to="/"
          className="shadow-gray-400 shadow-xl hover:scale-105 transition-all duration-200"
        >
          <img src="../../src/assets/Images/Instagram/instagram-6.png" alt="" />
        </Link>
      </div>

      {/* newsletters */}
      <div>
        <h2 className="title mb-8">Or subscribe to the newsletter</h2>
        <form className="md:w-1/2 mx-auto text-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address..."
            className="h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4"
          />
          <input
            type="submit"
            value={'Submit'}
            className="bg-black text-white px-6 py-1 rounded-lg hover:bg-orange-500 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Newsletters;

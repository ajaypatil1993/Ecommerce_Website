import React from 'react';
import bannerImg from '../../assets/Images/Banner/banner.jpeg';
import { FaShoppingBag } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className=" py-12 xl:px-28 px-4 ">
      <div className="py-28 bg-gray-400 bg-opacity-30 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        <div className="md:w-2/5 px-12 mr-20">
          <img
            src={bannerImg}
            alt="Model img"
            className="shadow-gray-400 shadow-xl"
          />
        </div>
        <div className="md:w-1/2 px-7">
          <h1 className="text-6xl font-extralight mb-5">𝙲𝚘𝚕𝚕𝚎𝚌𝚝𝚒𝚘𝚗𝚜</h1>
          <p className="text-2xl mb-7">
            𝚈𝚘𝚞 𝚌𝚊𝚗 𝚎𝚡𝚙𝚕𝚘𝚛𝚎 𝚊𝚗𝚍 𝚜𝚑𝚘𝚙 𝚖𝚊𝚗𝚢 𝚍𝚒𝚏𝚏𝚎𝚛𝚗𝚝 𝚌𝚘𝚕𝚕𝚎𝚌𝚝𝚒𝚘𝚗 𝚏𝚛𝚘𝚖 𝚟𝚊𝚛𝚒𝚘𝚞𝚜
            𝚋𝚊𝚛𝚊𝚗𝚍𝚜 𝚑𝚎𝚛𝚎.
          </p>
          <button className="bg-Black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-xl flex items-center gap-2 text-lg">
            <FaShoppingBag className="inline-flex " />
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

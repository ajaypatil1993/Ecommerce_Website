import React from 'react';

const Collection = () => {
  return (
    <div className='bg-[url("/src/assets/Images/Banner/collection-bg.png")] bg-cover bg-no-repeat bg-center xl:px-28 px-4 my-20 '>
      <div className="h-[580px] flex justify-between md:flex-row items-center">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
          <h1 className="text-white text-4xl font-bold">꧁•𝕍𝕆𝔾𝕌𝔼𝕍𝔼𝕏•꧂</h1>
          <p className="text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <button className="px-6 py-2 bg-red-800 text-white rounded-md font-semibold hover:text-orange-500">
            See Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collection;

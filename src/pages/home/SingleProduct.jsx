import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaArrowCircleRight } from 'react-icons/fa';

const SingleProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../src/assets/products.json');
        const data = await response.json();
        const product = data.filter((p) => p.id == id);
        console.log(product);
        setProducts(product[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);
  const { title, category, price, image, status } = products;

  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="p-3 max-w-7xl m-auto bg-slate-100 ">
        <div className='mt-2'>
          <a href="/" className="text-gray-600 ">
            Home
          </a>
          <a href="/shop" className="font-bold text-black">
            {' '}
            / Shop
          </a>
        </div>
        <div className="mt-2 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
            <div>
              <img
                src={image}
                alt=""
                className="w-full  shadow-gray-400 shadow-xl"
              />
            </div>

            {/* product details */}
            <div>
              <h1 className="title text-left">{title}</h1>
              <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                accusamus neque molestias hic laboriosam, dolore explicabo, odit
                quam saepe officiis reprehenderit culpa sint iure sed voluptas
                ipsum amet harum veritatis?
              </p>
              <span className="my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <p className="text-xl text-red-500 font-semibold sm:text-2xl">
                ${price}
              </p>
              <div className="mt-5">
                <div className="text-left flex flex-col gap-2 w-full">
                  <label className="font-semibold">Quantity</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    defaultValue={1}
                    required
                    className="border border-gray-400 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-xl m-0 py-3 px-4 md:py-3 md:px-4 focus:border-red-500"
                  />
                </div>
                <div className="w-full text-left my-4">
                  <button className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold border-red-500 rounded-xl ease-in-out duration-150 shadow-slate-600 hover:bg-gray-200 hover:text-red-500 lg:m-0 md:px-6">
                    <span>Confirm Order</span>
                    <FaArrowCircleRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-black/75 mt-12">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            odio inventore debitis, eum totam maxime impedit illum quam, sit
            reprehenderit aliquid. Minus necessitatibus nobis harum iusto sequi
            quidem tempore at.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            odio inventore debitis, eum totam maxime impedit illum quam, sit
            reprehenderit aliquid. Minus necessitatibus nobis harum iusto sequi
            quidem tempore at.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

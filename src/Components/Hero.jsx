import React from 'react';
import { ReactTyped } from 'react-typed';

export default function Hero() {
  return (
    <div id="hero" className='text-white'>
      <div className='max-w-[1300px] text-center mt-[-96px] w-full h-screen flex flex-col justify-center items-center'>
        <p className='text-[#00df9a] font-bold p-2'>Growing with Data Analytics</p>
        <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold md:py-3 lg:py-5'>Grow With Data.</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold pr-2'>Fast Flexible Financing for</p>
          <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4' strings={["BTB", "BTC", "SASS"]} typeSpeed={120} backSpeed={120} loop />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 p-2'>
          Monitor your Data Analytics to increase revenue for BTB, BTC, SASS platform.
        </p>
        <button className='bg-[#00df9a] rounded-lg w-fit p-2 mt-2 font-medium text-black  sm:hover  hover:bg-black hover:text-white hover:border-white hover:border-2'>
          Get Started
        </button>
      </div>
    </div>
  );
}

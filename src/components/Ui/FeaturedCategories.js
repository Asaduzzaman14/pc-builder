import Link from "next/link";
import React from "react";

const FeaturedCategories = () => {
  return (
    <div className='pt-8'>
      <h2>Featured Categories</h2>

      <div className='grid grid-cols-4 gap-5 mt-10'>
        <div>
          <Link href='/Speaker'>
            <h3 className='border-2 p-4 rounded-md text-center'>Speaker </h3>
          </Link>
        </div>
        <div>
          <Link href='/processor'>
            <h3 className='border-2 p-4 rounded-md text-center'>Processor </h3>
          </Link>
        </div>
        <div>
          <Link href='/motherboard'>
            <h3 className='border-2 p-4 rounded-md text-center'>
              Motherboard{" "}
            </h3>
          </Link>
        </div>
        <div>
          <Link href='/ram'>
            <h3 className='border-2 p-4 rounded-md text-center'>RAM </h3>
          </Link>
        </div>
        <div>
          <Link href='/powerSupplyUnit'>
            <h3 className='border-2 p-4 rounded-md text-center'>
              Power Supply Unit{" "}
            </h3>
          </Link>
        </div>
        <div>
          <Link href='/storageDevice'>
            <h3 className='border-2 p-4 rounded-md text-center'>
              Storage Device{" "}
            </h3>
          </Link>
        </div>
        <div>
          <Link href='/monitor'>
            <h3 className='border-2 p-4 rounded-md text-center'>Monitor </h3>
          </Link>
        </div>
        <div>
          <Link href='/mouse'>
            <h3 className='border-2 p-4 rounded-md text-center'>Mouse </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;

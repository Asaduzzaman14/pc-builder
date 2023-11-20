import Link from "next/link";
import React from "react";

const FeaturedCategories = () => {
  return (
    <div className='pt-8'>
      <h2>Featured Categories</h2>

      <div className='grid grid-cols-4 gap-5 mt-10'>
        <div>
          <Link href='/build/Speaker?query=Speaker'>
            <h3 className='border-2 p-4 rounded-md text-center'>Speaker</h3>
          </Link>
        </div>

        <div>
          <Link href='/build/Casing?query=Casing'>
            <h3 className='border-2 p-4 rounded-md text-center'>Casing</h3>
          </Link>
        </div>

        <div>
          <Link href='/Cpu'>
            <h3 className='border-2 p-4 rounded-md text-center'>CPU</h3>
          </Link>
        </div>

        <div>
          <Link href='/Gpu'>
            <h3 className='border-2 p-4 rounded-md text-center'>GPU</h3>
          </Link>
        </div>

        <div>
          <Link href='/Keyboard'>
            <h3 className='border-2 p-4 rounded-md text-center'>Keyboard</h3>
          </Link>
        </div>
        <div>
          <Link href='/Mouse'>
            <h3 className='border-2 p-4 rounded-md text-center'>Mouse </h3>
          </Link>
        </div>
        <div>
          <Link href='/Psu'>
            <h3 className='border-2 p-4 rounded-md text-center'>PSU </h3>
          </Link>
        </div>

        <div>
          <Link href='/Ram'>
            <h3 className='border-2 p-4 rounded-md text-center'>RAM </h3>
          </Link>
        </div>
        <div>
          <Link href='/Rom'>
            <h3 className='border-2 p-4 rounded-md text-center'>ROM</h3>
          </Link>
        </div>

        <div>
          <Link href='/Ssd'>
            <h3 className='border-2 p-4 rounded-md text-center'>SSD</h3>
          </Link>
        </div>
        <div>
          <Link href='/Ups'>
            <h3 className='border-2 p-4 rounded-md text-center'>UPS</h3>
          </Link>
        </div>

        <div>
          <Link href='/CpuCooler'>
            <h3 className='border-2 p-4 rounded-md text-center'>Cpu Cooler</h3>
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
          <Link href='/monitor'>
            <h3 className='border-2 p-4 rounded-md text-center'>Monitor </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;

import Link from "next/link";
import React from "react";

const FeaturedCategories = () => {
  return (
    <div className='pt-8 px-10'>
      <h2>Featured Categories</h2>

      <div className='grid grid-cols-2 lg:grid-cols-4 sm:gap-x-5 gap-6 mt-10'>
        <div className='hover:shadow-sky-800 rounded-md w-40 lg:w-48 shadow-md shadow-slate-500'>
          <Link href='/build/Speaker?query=Speaker'>
            <h3 className='border hover:border-sky-600 p-4 rounded-md text-center font-medium'>
              Speaker
            </h3>
          </Link>
        </div>

        <div className='hover:shadow-sky-800 rounded-md w-40 lg:w-48 shadow-md shadow-slate-500'>
          <Link href='/build/Casing?query=Casing'>
            <h3 className='border hover:border-sky-600 p-4 rounded-md text-center font-medium'>
              Casing
            </h3>
          </Link>
        </div>

        <div className='hover:shadow-sky-800 rounded-md w-40 lg:w-48 shadow-md shadow-slate-500'>
          <Link href='/build/cpu?query=CPU'>
            <h3 className='border hover:border-sky-600 p-4 rounded-md text-center font-medium'>
              CPU
            </h3>
          </Link>
        </div>

        <div className='hover:shadow-sky-800 rounded-md w-40 lg:w-48 shadow-md shadow-slate-500'>
          <Link href='/build/gpu?query=GPU'>
            <h3 className='border hover:border-sky-600 p-4 rounded-md text-center font-medium'>
              GPU
            </h3>
          </Link>
        </div>

        <div className='hover:shadow-sky-800 rounded-md w-40 lg:w-48 shadow-md shadow-slate-500'>
          <Link href='/build/Keyboard?query=Keyboard'>
            <h3 className='border hover:border-sky-600 p-4 rounded-md text-center font-medium'>
              Keyboard
            </h3>
          </Link>
        </div>
        <div className='hover:shadow-sky-800 rounded-md w-40 lg:w-48 shadow-md shadow-slate-500'>
          <Link href='/build/Mouse?query=Mouse'>
            <h3 className='border hover:border-sky-600 p-4 rounded-md text-center font-medium'>
              Mouse{" "}
            </h3>
          </Link>
        </div>
        <div className='hover:shadow-sky-800 rounded-md w-40 lg:w-48 shadow-md shadow-slate-500'>
          <Link href='/build/PSU?query=PSU'>
            <h3 className='border hover:border-sky-600 p-4 rounded-md text-center font-medium'>
              PSU{" "}
            </h3>
          </Link>
        </div>

        <div className='hover:shadow-sky-800 rounded-md w-40 lg:w-48 shadow-md shadow-slate-500'>
          <Link href='/build/ram?query=RAM'>
            <h3 className='border hover:border-sky-600 p-4 rounded-md text-center font-medium'>
              RAM{" "}
            </h3>
          </Link>
        </div>
        {/* <div>
          <Link href='/Rom'>
            <h3 className='border hover:border-sky-600 p-4 rounded-md text-center font-medium'>ROM</h3>
          </Link>
        </div> */}

        <div className='hover:shadow-sky-800 rounded-md w-40 lg:w-48 shadow-md shadow-slate-500'>
          <Link href='/build/SSD?query=SSD'>
            <h3 className='border hover:border-sky-600 p-4 rounded-md text-center font-medium'>
              SSD
            </h3>
          </Link>
        </div>
        {/* <div>
          <Link href='/Ups'>
            <h3 className='border hover:border-sky-600 p-4 rounded-md text-center font-medium'>UPS</h3>
          </Link>
        </div> */}

        <div className='hover:shadow-sky-800 rounded-md w-40 lg:w-48 shadow-md shadow-slate-500'>
          <Link href='/build/cpu-cooler?query=Cpu-Cooler'>
            <h3 className='border hover:border-sky-600 p-4 rounded-md text-center font-medium'>
              Cpu Cooler
            </h3>
          </Link>
        </div>

        {/* <div>
          <Link href='/build/Speaker?query=Speaker'>
            <h3 className='border hover:border-sky-600 p-4 rounded-md text-center font-medium'>Processor </h3>
          </Link>
        </div> */}
        <div className='hover:shadow-sky-800 rounded-md w-40 lg:w-48 shadow-md shadow-slate-500'>
          <Link href='/build/MotherBoard?query=MotherBoard'>
            <h3 className='border hover:border-sky-600 p-4 rounded-md text-center font-medium'>
              Motherboard{" "}
            </h3>
          </Link>
        </div>

        {/* <div>
          <Link href='/monitor'>
            <h3 className='border hover:border-sky-600 p-4 rounded-md text-center font-medium'>Monitor </h3>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default FeaturedCategories;

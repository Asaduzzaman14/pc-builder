import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Sidebar = (props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className=' '>
      <div className=' flex flex-col gap-2 ps-2'>
        <li className=' p-1 rounded-sm flex place-items-center gap-2 hover:bg-[#515151]'>
          <span className='h-7 w-7 flex justify-center text-xl font-bold bg-gray-400 rounded-full'>
            P
          </span>
          <Link href='/dashboard/products'>Products</Link>
        </li>
        <li className=' p-1 rounded-sm flex place-items-center gap-2 hover:bg-[#515151]'>
          <span className='h-7 w-7 flex justify-center text-xl font-bold bg-gray-400 rounded-full'>
            U
          </span>
          <Link href='/dashboard/users'>Users</Link>
        </li>
        <li className=' p-1 rounded-sm flex place-items-center gap-2 hover:bg-[#515151]'>
          <span className='h-7 w-7 flex justify-center text-xl font-bold bg-gray-400 rounded-full'>
            P
          </span>
          <Link href='/dashboard/addProducts'>Add Products</Link>
        </li>
        <li className=' p-1 rounded-sm flex place-items-center gap-2 hover:bg-[#515151]'>
          <span className='h-7 w-7 flex justify-center text-xl font-bold bg-gray-400 rounded-full'>
            P
          </span>
          <Link href='/dashboard/profile'>Profile</Link>
        </li>
        <li className=' p-1 rounded-sm flex place-items-center gap-2 hover:bg-[#515151]'>
          <span className='h-7 w-7 flex justify-center text-xl font-bold bg-gray-400 rounded-full'>
            P
          </span>
          <Link href='dashboard/products'>Products</Link>
        </li>
        <li className=' p-1 rounded-sm flex place-items-center gap-2 hover:bg-[#515151]'>
          <span className='h-7 w-7 flex justify-center text-xl font-bold bg-gray-400 rounded-full'>
            P
          </span>
          <Link href='allProduct'>Products</Link>
        </li>

        <li className=' p-1 rounded-sm flex place-items-center gap-2 hover:bg-[#515151]'>
          <span className='h-7 w-7 flex justify-center text-xl font-bold bg-gray-400 rounded-full'>
            P
          </span>
          <Link href='allProduct'>Products</Link>
        </li>
        <li className=' p-1 rounded-sm flex place-items-center gap-2 hover:bg-[#515151]'>
          <span className='h-7 w-7 flex justify-center text-xl font-bold bg-gray-400 rounded-full'>
            P
          </span>
          <Link href='allProduct'>Products</Link>
        </li>

        <li className=' p-1 rounded-sm flex place-items-center gap-2 hover:bg-[#515151]'>
          <span className='h-7 w-7 flex justify-center text-xl font-bold bg-gray-400 rounded-full'>
            P
          </span>
          <Link href='allProduct'>Products</Link>
        </li>
        <li className=' p-1 rounded-sm flex place-items-center gap-2 hover:bg-[#515151]'>
          <span className='h-7 w-7 flex justify-center text-xl font-bold bg-gray-400 rounded-full'>
            P
          </span>
          <Link href='allProduct'>Products</Link>
        </li>

        <Button onClick={handleClick} type='primary' danger>
          home
        </Button>
        <Link href='/' className='mb-14 mx-auto'>
          <button className=' border px-4 mx-auto m-2 rounded-md w-fit'>
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

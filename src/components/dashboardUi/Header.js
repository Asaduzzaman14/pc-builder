import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = (props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className=' '>
      <div className=' flex flex-col gap-2 ps-2'>
        <li className='hover:bg-[#1a192cc9]'>
          <Link href='allOrders'>Orders 1</Link>
        </li>
        <li className='hover:bg-[#1a192cc9]'>
          <Link href='allUsers'>Users 2</Link>
        </li>
        <li className='hover:bg-[#1a192cc9]'>
          <Link href='allreviews'>Reviews 3</Link>
        </li>
        <li className='hover:bg-[#1a192cc9]'>
          <Link href='allproducts'>Products</Link>
        </li>
        <li className='hover:bg-[#1a192cc9]'>
          <Link href='allproducts'>Products</Link>
        </li>
        <li className='hover:bg-[#1a192cc9]'>
          <Link href='allproducts'>Products</Link>
        </li>
        <li className='hover:bg-[#1a192cc9]'>
          <Link href='allproducts'>Products</Link>
        </li>
        <li className='hover:bg-[#1a192cc9]'>
          <Link href='allproducts'>Products</Link>
        </li>
        <li className='hover:bg-[#1a192cc9]'>
          <Link href='allproducts'>Products</Link>
        </li>
        <li className='hover:bg-[#1a192cc9]'>
          <Link href='allproducts'>Products</Link>
        </li>
        <li className='hover:bg-[#1a192cc9]'>
          <Link href='allproducts'>Products</Link>
        </li>
        <li className='hover:bg-[#1a192cc9]'>
          <Link href='allproducts'>Products</Link>
        </li>
        <li className='hover:bg-[#1a192cc9]'>
          <Link href='allproducts'>11111</Link>
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

export default Header;

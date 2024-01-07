import React from "react";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { Button } from "antd";
import Header from "../dashboardUi/Header";
import Footer from "../dashboardUi/Footer";
import DahsboardSidebar from "../dashboardUi/DahsboardSidebar";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <SessionProvider>
      <div className=' sticky top-0 z-40 bg-gray-900 flex justify-between p-2 lg:p-2 lg:px-5 text-white'>
        <Link href={"/"}>
          <span className='py-auto my-auto'>Back</span>
        </Link>
        {/* <img className='w-12' src={user} alt='' /> */}
      </div>
      {/*  dashboard sidebar */}

      <div className='flex flex-row justify-between'>
        <div className=' fixed  top-15 left-0  drawer-side h-[80%]'>
          <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
          <ul className='overflow-y-scroll bg-primary/95 text-white font-semibold menu  w-40 h-screen'>
            <li className='hover:bg-[#1a192cc9]'>
              <Link href='addproduct'>Add Product</Link>
            </li>
            <li className='hover:bg-[#1a192cc9]'>
              <Link href='allOrders'>Orders</Link>
            </li>
            <li className='hover:bg-[#1a192cc9]'>
              <Link href='allUsers'>Users</Link>
            </li>
            <li className='hover:bg-[#1a192cc9]'>
              <Link href='allreviews'>Reviews</Link>
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
            <li>
              <Link href='/' className='mb-14 mx-auto'>
                <button className=' border px-4 mx-auto m-2 rounded-md w-fit'>
                  Home
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <div className='  ml-40 justify-end   border-2  '>
          <div className='mx-auto'>{children}</div>

          <div className='min-w-full'>
            <div className='p-3 min-w-full'>
              <h2 className='text-2xl'>
                Footer Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident nihil assumenda quisquam molestias commodi a, quam
              </h2>
            </div>
          </div>
        </div>
      </div>
    </SessionProvider>
  );
};

export default DashboardLayout;

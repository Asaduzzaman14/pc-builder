import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { Button } from "antd";
import Header from "../dashboardUi/Sidebar";
import Footer from "../dashboardUi/Footer";
import DahsboardSidebar from "../dashboardUi/DahsboardSidebar";
import Link from "next/link";
import Sidebar from "../dashboardUi/Sidebar";
import { MdOutlineMenu } from "react-icons/md";

const DashboardLayout = ({ children }) => {
  const [show, setShow] = useState(true);
  console.log(show);

  return (
    <SessionProvider>
      <div className=' sticky  top-0 z-40 bg-gray-900 flex place-items-center justify-between p-2 lg:p-2 lg:px-5 text-white'>
        <Link href={"/"}>
          <span className='py-auto my-auto'>Back</span>
        </Link>
        <MdOutlineMenu
          className='text-2xl m-1 lg:hidden'
          onClick={() => setShow(!show)}
        />
      </div>

      <div className='flex flex-row scroll-m-0 justify-between'>
        <div className={`${show ? " hidden lg:block mr-40" : "block mr-40"}`}>
          <div className=' fixed  top-10 left-0  drawer-side h-[80%]'>
            <ul className='overflow-y-scroll bg-primary/95 text-white font-semibold menu  w-40 h-screen'>
              <Sidebar />
            </ul>
          </div>
        </div>

        <div className={` w-[100%] justify-end h-screen p-2 `}>
          <div className='mx-auto min-h-full max-w-[100%]'>{children}</div>

          <div className='min-w-full max-w-screen '>
            <div className=' pt-4 min-w-full'>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </SessionProvider>
  );
};

export default DashboardLayout;

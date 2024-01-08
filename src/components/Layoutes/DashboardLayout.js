import React from "react";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { Button } from "antd";
import Header from "../dashboardUi/Sidebar";
import Footer from "../dashboardUi/Footer";
import DahsboardSidebar from "../dashboardUi/DahsboardSidebar";
import Link from "next/link";
import Sidebar from "../dashboardUi/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <SessionProvider>
      <div className=' sticky top-0 z-40 bg-gray-900 flex justify-between p-2 lg:p-2 lg:px-5 text-white'>
        <Link href={"/"}>
          <span className='py-auto my-auto'>Back</span>
        </Link>
      </div>

      <div className='flex flex-row justify-between'>
        <div className=' fixed  top-10 left-0  drawer-side h-[80%]'>
          <label htmlFor='dashboard-sidebar' className='drawer-overlay'></label>
          <ul className='overflow-y-scroll bg-primary/95 text-white font-semibold menu  w-40 h-screen'>
            <Sidebar />
          </ul>
        </div>

        <div className='  ml-40 w-[100%] justify-end h-screen p-2  '>
          <div className='mx-auto min-h-full'>{children}</div>

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

import React from "react";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { Button } from "antd";
import Header from "../dashboardUi/Header";
import Footer from "../dashboardUi/Footer";
import DahsboardSidebar from "../dashboardUi/DahsboardSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <SessionProvider>
      {/* dashboard header  */}
      <div className='fixed w-full '>
        <Header />
      </div>
      {/* dashboard header  */}
      {/* end */}
      <div className='flex gap-4 '>
        <DahsboardSidebar />
        <div
          style={{
            // padding: "20px",
            minHeight: "100vh",
          }}
          className='overflow-y-auto'
        >
          {children}
        </div>
      </div>

      {/* dashboard footer start */}
      <div>
        <Footer />
      </div>
    </SessionProvider>
  );
};

export default DashboardLayout;

import React from "react";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { Button } from "antd";

const DashboardLayout = ({ children }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <SessionProvider>
      {/* dashboard header  */}
      <div className=''>
        <Button onClick={handleClick} type='primary' danger>
          home
        </Button>
        <div>
          <h2 className=' py-2 bg-gray-200 text-slate-700'>Header</h2>
        </div>
      </div>
      {/* dashboard header  */}
      {/* end */}
      <div className='flex gap-4'>
        <div className=' border border-red-600 p-5'>
          <div>sidebar</div>
        </div>
        <div
          style={{
            // padding: "20px",
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </div>

      {/* dashboard footer start */}
      <div>
        <p className='p-2 bg-gray-200 text-black'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          iure?
        </p>
      </div>
    </SessionProvider>
  );
};

export default DashboardLayout;

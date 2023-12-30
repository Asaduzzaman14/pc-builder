import { Button } from "antd";
import { useRouter } from "next/router";
import React from "react";

const Header = (props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className='bg-gray-900  max-h-screen  h-fit w-full py-4 '>
      <div className='flex justify-between  text-white px-4'>
        <h2 className='text-white text-2xl'>Logo</h2>

        <div className='flex gap-3'>
          <Button onClick={handleClick} type='primary' danger>
            home
          </Button>
          <h2 className=''>User</h2>
          <p className='border border-1 rounded-md px-2 p-1'> Menu</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

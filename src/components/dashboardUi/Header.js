import { Button } from "antd";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className='bg-gray-900 py-4 text-white'>
      <div className='flex justify-between px-4'>
        <Button onClick={handleClick} type='primary' danger>
          home
        </Button>
        <div>
          <h2 className=''>Header</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;

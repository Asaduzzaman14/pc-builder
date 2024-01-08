import DashboardLayout from "@/components/Layoutes/DashboardLayout";
import React from "react";

const products = () => {
  return (
    <div>
      <h2 className='py-5 flex justify-center text-center'>Products</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default products;

products.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

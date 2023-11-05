import RootLayout from "@/components/Layoutes/RootLayout";
import CatagoryProduct from "@/components/Ui/catagoryProduct";
import React from "react";

const Ram = ({ products }) => {
  // console.log(products);
  const ram = products?.filter((product) => product?.Category === "RAM");
  // console.log(ram);

  return (
    <div>
      <h2>Ram</h2>
      <div className='grid grid-cols-2'>
        {ram?.data?.map((parts) => {
          return <CatagoryProduct key={parts?._id} product={parts} />;
        })}
      </div>
      <h2 className='py-5'>Related parts</h2>
      <div className='grid grid-cols-2'>
        {/* {ram?.data?.map((parts) => {
          return <CatagoryProduct key={parts?._id} product={parts} />;
        })} */}
      </div>
    </div>
  );
};

export default Ram;

Ram.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const result = await fetch(
    "https://pc-builder-gules-psi.vercel.app/api/v1/pc-parts"
  );
  const data = await result.json();
  console.log(data?.data);
  return {
    props: {
      products: data?.data,
    },
    revalidate: 30,
  };
};

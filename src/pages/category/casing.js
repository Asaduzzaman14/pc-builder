import RootLayout from "@/components/Layoutes/RootLayout";
import CatagoryProduct from "@/components/Ui/catagoryProduct";
import React from "react";

const Casing = ({ products }) => {
  return (
    <div>
      <h2>Casing</h2>
      <div>
        <div className='grid lg:grid-cols-2 gap-2'>
          {products?.map((part) => {
            return <CatagoryProduct key={part?._id} product={part} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Casing;
Casing.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const result = await fetch(
    "https://pc-builder-gules-psi.vercel.app/api/v1/pc-parts?Category=Casing"
  );
  const data = await result.json();
  console.log(data);
  return {
    props: {
      products: data?.data,
    },
  };
};

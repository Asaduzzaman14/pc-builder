import RootLayout from "@/components/Layoutes/RootLayout";
import CatagoryProduct from "@/components/Ui/catagoryProduct";
import React from "react";

const Speaker = ({ products }) => {
  // console.log(products.data);

  const speaker = products?.data?.filter(
    (product) => product?.Category == "Speaker"
  );
  // console.log(speaker);
  return (
    <div>
      <h2 className='py-3'>Speaker</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {speaker?.map((parts) => {
          return <CatagoryProduct key={parts?._id} product={parts} />;
        })}
      </div>

      <h2 className='pt-7'>Related products</h2>
      <div className='grid grid-cols-1  lg:grid-cols-2 gap-4 mt-5'>
        {products?.data?.map((parts) => {
          return <CatagoryProduct key={parts?._id} product={parts} />;
        })}
      </div>
    </div>
  );
};

export default Speaker;

Speaker.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const result = await fetch(
    "https://pc-builder-gules-psi.vercel.app/api/v1/pc-parts"
  );
  // console.log(result);
  const data = await result.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
};

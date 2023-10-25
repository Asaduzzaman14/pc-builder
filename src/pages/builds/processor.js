import RootLayout from "@/components/Layoutes/RootLayout";
import CatagoryProduct from "@/components/Ui/catagoryProduct";
import React from "react";

const Processor = ({ products }) => {
  console.log(products);
  if (!products) {
    return <h2>Loading...</h2>;
  }

  const processor = products?.data?.filter(
    (product) => product?.Catagory === "processor"
  );

  return (
    <div>
      <h2>Processor</h2>
      <>
        <CatagoryProduct products={processor} />
      </>
    </div>
  );
};

export default Processor;

Processor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const result = await fetch(
    "https://pc-builder-gules-psi.vercel.app/api/v1/pc-parts"
  );
  const data = await result.json();
  console.log(data);
  return {
    props: {
      products: data?.data,
    },
  };
};

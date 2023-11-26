import RootLayout from "@/components/Layoutes/RootLayout";
import CatagoryProduct from "@/components/Ui/catagoryProduct";
import React from "react";

const Monitor = ({ products }) => {
  // const monitor = products?.filter((product) => product.catagory == "monitor");

  return (
    <div>
      <h2>Monitor</h2>
      <>{/* <CatagoryProduct products={monitor} /> */}</>
    </div>
  );
};

export default Monitor;

Monitor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const result = await fetch(
    "https://pc-builder-gules-psi.vercel.app/api/v1/pc-parts/monitor"
  );
  const data = await result.json();

  return {
    props: {
      products: data,
    },
    // revalidate: 30,
  };
};

import RootLayout from "@/components/Layoutes/RootLayout";
import CatagoryProduct from "@/components/Ui/catagoryProduct";
import React from "react";

const Speaker = ({ products }) => {
  console.log(products.data);

  const speaker = products?.data?.filter(
    (product) => product?.Category == "Casing"
  );
  console.log(speaker);
  return (
    <div>
      <h2>Speaker</h2>
      <>{/* <CatagoryProduct products={ram} /> */}</>
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
  console.log(result);
  const data = await result.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
};

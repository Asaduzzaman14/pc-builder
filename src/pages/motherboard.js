import RootLayout from "@/components/Layoutes/RootLayout";
import CatagoryProduct from "@/components/Ui/catagoryProduct";
import React from "react";

const Motherboard = ({ products }) => {
  const motherboard = products?.filter(
    (product) => product.catagory === "motherboard"
  );

  return (
    <div>
      <h2>Motherboard</h2>
      <>
        <CatagoryProduct products={motherboard} />
      </>
    </div>
  );
};

export default Motherboard;

Motherboard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const result = await fetch(
    "https://pc-builder-gules-psi.vercel.app/api/v1/pc-parts"
  );
  const data = await result.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
};

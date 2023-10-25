import RootLayout from "@/components/Layoutes/RootLayout";
import CatagoryProduct from "@/components/Ui/catagoryProduct";
import React from "react";

const Mouse = () => {
  const powerSupply = products?.filter(
    (product) => product.Category == "mouse"
  );

  return (
    <div>
      <h2>Mouse</h2>
      <div>
        <CatagoryProduct products={powerSupply} />
      </div>
    </div>
  );
};

export default Mouse;

Mouse.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const result = await fetch(
    "https://pc-builder-gules-psi.vercel.app/api/v1/pc-parts"
  );
  const data = await result.json();

  return {
    props: {
      products: data?.data,
    },
  };
};

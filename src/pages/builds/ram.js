import RootLayout from "@/components/Layoutes/RootLayout";
import CatagoryProduct from "@/components/Ui/catagoryProduct";
import React from "react";

const Ram = ({ products }) => {
  const ram = products?.filter((product) => product?.Category === "ram");

  return (
    <div>
      <h2>Ram</h2>
      <>
        <CatagoryProduct products={ram} />
      </>
    </div>
  );
};

export default Ram;

Ram.getLayout = function getLayout(page) {
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

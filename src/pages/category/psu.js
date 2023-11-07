import RootLayout from "@/components/Layoutes/RootLayout";
import React from "react";

const Psu = () => {
  return (
    <div>
      <h2>PSU</h2>
    </div>
  );
};

export default Psu;

Psu.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

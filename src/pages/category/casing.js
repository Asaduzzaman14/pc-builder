import RootLayout from "@/components/Layoutes/RootLayout";
import React from "react";

const Casing = () => {
  return (
    <div>
      <h2>Casing</h2>
    </div>
  );
};

export default Casing;
Casing.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

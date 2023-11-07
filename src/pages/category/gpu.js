import RootLayout from "@/components/Layoutes/RootLayout";
import React from "react";

const Gpu = () => {
  return (
    <div>
      <h2>GPU</h2>
    </div>
  );
};

export default Gpu;

Gpu.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

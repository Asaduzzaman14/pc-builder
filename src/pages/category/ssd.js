import RootLayout from "@/components/Layoutes/RootLayout";
import React from "react";

const Ssd = () => {
  return (
    <div>
      <h2>SSD</h2>
    </div>
  );
};

export default Ssd;

Ssd.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

import RootLayout from "@/components/Layoutes/RootLayout";
import React from "react";

const Motherboard = () => {
  return (
    <div>
      <h2>Motherboard</h2>
    </div>
  );
};

export default Motherboard;

Motherboard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

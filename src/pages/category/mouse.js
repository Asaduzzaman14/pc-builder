import RootLayout from "@/components/Layoutes/RootLayout";
import React from "react";

const Mouse = () => {
  return (
    <div>
      <h2>Mouse</h2>
    </div>
  );
};

export default Mouse;

Mouse.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

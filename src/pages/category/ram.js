import RootLayout from "@/components/Layoutes/RootLayout";
import React from "react";

const Ram = () => {
  return (
    <div>
      <h2>RAM</h2>
    </div>
  );
};

export default Ram;

Ram.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

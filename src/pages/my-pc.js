import RootLayout from "@/components/Layoutes/RootLayout";
import React from "react";

const MyPc = () => {
  return (
    <div>
      <h2>My PC</h2>
    </div>
  );
};

export default MyPc;

MyPc.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

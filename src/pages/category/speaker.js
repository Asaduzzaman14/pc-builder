import RootLayout from "@/components/Layoutes/RootLayout";
import React from "react";

const Speaker = () => {
  return (
    <div>
      <h2>Speaker</h2>
    </div>
  );
};

export default Speaker;

Speaker.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

import RootLayout from "@/components/Layoutes/RootLayout";
import React from "react";

const Keyboard = () => {
  return (
    <div>
      <h2>Keyboard</h2>
    </div>
  );
};

export default Keyboard;

Keyboard.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

import RootLayout from "@/components/Layoutes/RootLayout";
import React from "react";

const Cpu = () => {
  return (
    <div>
      <h2>Cpu</h2>
    </div>
  );
};

export default Cpu;

Cpu.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

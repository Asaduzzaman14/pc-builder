import RootLayout from "@/components/Layoutes/RootLayout";
import React from "react";

const CpuCooler = () => {
  return (
    <div>
      <h2>cpuCooler</h2>
    </div>
  );
};

export default CpuCooler;

CpuCooler.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

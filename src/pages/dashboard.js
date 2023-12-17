import RootLayout from "@/components/Layoutes/RootLayout";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <h2 className='pt-5'>Dashboard</h2>
    </div>
  );
};

export default DashboardPage;

DashboardPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

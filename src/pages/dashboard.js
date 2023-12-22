import DashboardLayout from "@/components/Layoutes/DashboardLayout";
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
  return <DashboardLayout>{page}</DashboardLayout>;
};

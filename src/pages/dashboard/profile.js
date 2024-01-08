import DashboardLayout from "@/components/Layoutes/DashboardLayout";
import React from "react";

const profile = () => {
  return (
    <div>
      <h2>profile</h2>
    </div>
  );
};

export default profile;

profile.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

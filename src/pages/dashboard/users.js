import DashboardLayout from "@/components/Layoutes/DashboardLayout";
import React from "react";

const Users = () => {
  return (
    <div className='bg-red-500'>
      <h2>Users</h2>
    </div>
  );
};

export default Users;

Users.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

import authMiddleware from "@/middleware";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <h1>Private Dashboard</h1>
      <p>This page is protected. Only authenticated users can access it.</p>
    </div>
  );
};

export default authMiddleware(DashboardPage);

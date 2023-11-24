import React from "react";

import Footer from "../Ui/Footer";
import App from "../Ui/Header";
import { SessionProvider } from "next-auth/react";

const RootLayout = ({ children }) => {
  return (
    <SessionProvider>
      <App />
      <div
        style={{
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
      <Footer />
    </SessionProvider>
  );
};

export default RootLayout;

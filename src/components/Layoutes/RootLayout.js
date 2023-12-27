import React from "react";

import Footer from "../Ui/Footer";
import App from "../Ui/Header";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "@/redux/store";

const RootLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <SessionProvider>
        <App />
        <div
          style={{
            // padding: "20px",
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
        <Footer />
      </SessionProvider>
    </Provider>
  );
};

export default RootLayout;

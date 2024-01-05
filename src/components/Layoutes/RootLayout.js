import React from "react";

import Footer from "../Ui/Footer";
import App from "../Ui/Header";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "@/redux/store";
import HandleScroll from "../Ui/HandleScroll ";

const RootLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <SessionProvider>
        <App />

        <section
          style={{
            minHeight: "100vh",
          }}
        >
          {children}
        </section>
        <div className=' relative'>
          <HandleScroll />
        </div>
        <Footer />
      </SessionProvider>
    </Provider>
  );
};

export default RootLayout;

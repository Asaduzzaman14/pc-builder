import RootLayout from "@/components/Layoutes/RootLayout";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase.auth";

const About = () => {
  const { data: session } = useSession();
  const [user, loadign, err] = useAuthState(auth);
  const router = useRouter();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>About</h2>
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

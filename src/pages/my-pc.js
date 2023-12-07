import RootLayout from "@/components/Layoutes/RootLayout";
import { auth } from "@/firebase/firebase.auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { redirect } from "next/navigation";

const MyPc = () => {
  const { data: session } = useSession();
  const [user, loadign, err] = useAuthState(auth);
  const router = useRouter();

  if (!session || !user) {
    router.push("/login");
    // redirect("/blogs");
    // redirect("/blogs");
  }
  // if (!session || !user) {
  //   res.writeHead(302, { Location: "/login" });
  //   res.end();
  //   return;
  // }
  return (
    <div>
      <h2>My PC</h2>
    </div>
  );
};

export default MyPc;

MyPc.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";

import { signIn } from "next-auth/react";
import RootLayout from "@/components/Layoutes/RootLayout";
import Swal from "sweetalert2";
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth } from "@/firebase/firebase.auth";
// import { useForm } from "react-hook-form"

const login = () => {
  // const { register, handleSubmit, } = useForm()
  // const [createUserWithEmailAndPassword, user, loadingerror,] =
  //     useCreateUserWithEmailAndPassword(auth);

  // const onSubmit = (data) => {
  //   console.log(data)
  //   createUserWithEmailAndPassword(data.email, data.password)

  // }

  // console.log(user);

  const login = () => {
    signIn("github", {
      callbackUrl: "http://localhost:3000/",
    });
    Swal.fire({
      title: "Successfully login",
      icon: "success",
    });
  };

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          {/* <GoogleOutlined /> */}
          <GithubOutlined onClick={() => login()} />
        </div>
        <hr />
        <form>
          <label htmlFor=''>Your Email</label>
          <input
            //  {...register("email", { required: true })}
            type='email'
          />
          <label htmlFor=''>Your Password</label>
          <input
            // {...register("password", { required: true })}
            type='password'
          />
          <Button className='text-white pb-4 mb-4'>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default login;

login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

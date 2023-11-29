import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";

import { signIn, useSession } from "next-auth/react";
import RootLayout from "@/components/Layoutes/RootLayout";
import Swal from "sweetalert2";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase.auth";
import { useForm } from "react-hook-form";
import Link from "next/link";

const Login = () => {
  const { data: session } = useSession();
  const [user, loadign, err] = useAuthState(auth);
  console.log(user);

  const { register, handleSubmit } = useForm();
  const [createUserWithEmailAndPassword, loadingerror] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(data.email, data.password);
  };

  console.log(user);
  const login = () => {
    signIn("github", {
      callbackUrl: "http://localhost:3000/",
    });
  };
  const googlelogin = () => {
    signIn("google", {
      callbackUrl: "http://localhost:3000/",
    });
  };
  if (session?.user?.email) {
    Swal.fire({
      title: "Successfully login",
      icon: "success",
    });
  }

  return (
    <div>
      <Head>
        <title>pc builder Login</title>
      </Head>
      <div className={styles.form}>
        <h3 className='font-bold text-2xl'>LOGIN</h3>
        <div className={`${styles.social_icons} felx  justify-center`}>
          {/* icons github  */}
          <GoogleOutlined onClick={() => googlelogin()} />
          {/* icons google  */}
          <GithubOutlined onClick={() => login()} />
        </div>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className=''>
          <label className='' htmlFor=''>
            Your Email
          </label>
          <input {...register("email", { required: true })} type='email' />
          <label className='' htmlFor=''>
            Your Password
          </label>
          <input
            {...register("password", { required: true })}
            type='password'
          />
          <div className='text-white flex gap-2 items-center justify-center  mt-5 mx-auto'>
            <button
              type='submit'
              className='border border-gray-300 m-0 rounded-md py-1'
            >
              Login
            </button>

            <Link href='/signIn' className='underline underline-offset-4'>
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

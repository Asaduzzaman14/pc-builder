import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn, useSession } from "next-auth/react";
import RootLayout from "@/components/Layoutes/RootLayout";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";

const SignIn = () => {
  const { data: session } = useSession();
  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const { name, email, password } = data;

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      console.log("11");
      const resUserExists = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();
      console.log(user, "from db");
      if (user) {
        alert("User already exists.");
        setError("User already exists.");
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  const SignIn = () => {
    signIn("github", {
      callbackUrl: "http://localhost:3000/",
    });
  };
  const googleSignIn = () => {
    signIn("google", {
      callbackUrl: "http://localhost:3000/",
    });
  };

  return (
    <div>
      <Head>
        <title>pc builder SignIn</title>
      </Head>
      <div className={`${styles.form} min-h-[450px]`}>
        <h3 className='font-bold text-2xl'>Register</h3>
        <div className={`${styles.social_icons} felx  justify-center`}>
          {/* icons github  */}
          <GoogleOutlined onClick={() => googleSignIn()} />
          {/* icons google  */}
          <GithubOutlined onClick={() => SignIn()} />
        </div>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className=''>
          <label htmlFor=''>Name</label>
          <input
            className='text-black'
            {...register("name", { required: true })}
            type='text'
          />

          <label htmlFor=''>Your Email</label>
          <input
            className='text-black'
            {...register("email", { required: true })}
            type='email'
          />

          <label htmlFor=''>Your Password</label>
          <input
            className='text-black'
            {...register("password", { required: true })}
            type='password'
          />
          <div className='text-white flex gap-2 items-center justify-center  mt-5 mx-auto'>
            <button
              type='submit'
              className='border border-gray-300 m-0 rounded-md py-1 px-3'
            >
              Register
            </button>

            <Link className='underline' href='/login'>
              Have an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

SignIn.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

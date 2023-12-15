import RootLayout from "@/components/Layoutes/RootLayout";
import { auth } from "@/firebase/firebase.auth";
import { useSession } from "next-auth/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

import { useRouter } from "next/router";
const MyPc = ({ products }) => {
  console.log(products);
  const { data: session } = useSession();
  const [user, loadign, err] = useAuthState(auth);
  const router = useRouter();
  if (!session && !user) {
    router.push("/login");
    // redirect("/blogs");
  }

  return (
    <div className='px-5 mb-4 lg:px-8'>
      <h2 className='mt-4'>My PC List</h2>
      <div className='grid gap-5 grid-cols-1 place-items-center'>
        {products.map((product) => {
          return (
            <div key={product._id} className='bg-[#0c1b33]'>
              <h2 className='py-3'>{product?.email}</h2>
              <div>
                {product?.products.map((item) => {
                  return (
                    <div
                      key={item?._id}
                      className=' border gap-3 flex p-3 m-3 rounded-md'
                    >
                      <Image
                        className=' rounded-sm'
                        alt='aa'
                        width={150}
                        height={100}
                        src={item?.img1}
                      ></Image>

                      <div>
                        <p>{item?.Category}</p>
                        <p>{item?.Brand}</p>
                        <p>{item?.Keys}</p>
                        <p>{item?.Model}</p>
                        <p>{item?.Weight}</p>
                        <p>{item?.AvgRatings}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyPc;

MyPc.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const result = await fetch(
    "https://pc-builder-gules-psi.vercel.app/api/v1/pc-build"
  );
  const data = await result?.json();
  return {
    props: {
      products: data?.data,
    },
  };
};

import RootLayout from "@/components/Layoutes/RootLayout";
import { auth } from "@/firebase/firebase.auth";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

import Swal from "sweetalert2";

import { useRouter } from "next/router";
const MyPc = ({ products }) => {
  console.log(products);
  const { data: session } = useSession();
  const [user, loadign, err] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!session && !user) {
      router?.push("/login");
      // redirect("/blogs");
    }
  }, []);

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        // Make a DELETE request to your API
        const response = await fetch(
          `https://pc-builder-gules-psi.vercel.app/api/v1/pc-build/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          // Update the state only if the deletion was successful
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else {
          console.error("Failed to delete item");
        }
      }
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };

  return (
    <div className='px-5 mb-4 lg:px-8'>
      <h2 className='mt-4'>My PC List</h2>
      <div className='grid gap-5 grid-cols-1 place-items-center'>
        {products.map((product) => {
          return (
            <div key={product._id} className='bg-[#0c1b33]'>
              <div className='flex justify-between items-center px-3'>
                <h2 className='py-3'>{product?.email}</h2>

                <div className='flex justify-end'>
                  <button
                    onClick={() => handleDelete(product?._id)}
                    className='border h-fit bg-red-600 px-3 py-1  rounded-md'
                  >
                    Delete
                  </button>
                </div>
              </div>
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

export const getServerSideProps = async (context) => {
  // Access query parameters from the context
  console.log(context);
  const { query } = context;
  console.log(query);

  // Use the query parameters to construct the API URL
  const apiUrl = `https://pc-builder-gules-psi.vercel.app/api/v1/pc-build?email=${query?.email}`;

  // Fetch data from the dynamic API URL
  const result = await fetch(apiUrl);

  // Parse the JSON data
  const data = await result?.json();

  return {
    props: {
      products: data?.data,
    },
  };
};

// export const getServerSideProps = async () => {
//   const result = await fetch(
//     "https://pc-builder-gules-psi.vercel.app/api/v1/pc-build"
//   );
//   const data = await result?.json();
//   return {
//     props: {
//       products: data?.data,
//     },
//   };
// };

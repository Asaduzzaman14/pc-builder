import DashboardLayout from "@/components/Layoutes/DashboardLayout";
import Image from "next/image";
import React, { useEffect } from "react";

const AllProduct = ({ products }) => {
  const updateParts = async (data) => {
    data.Price = 6666;
    console.log(data);
    console.log("update data");
    try {
      const response = await fetch(
        `https://pc-builder-gules-psi.vercel.app/api/v1/pc-parts/${data._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json", // Specify the content type
            Accept: "application/json", // Specify the expected response type
          },
          body: JSON.stringify({
            data,
          }),
        }
      );
      console.log(response);

      if (!response.ok) {
        console.log("ok");
        console.error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error:", error.message);
      console.log("err");
    }
  };
  return (
    <div>
      <h2>Products {products?.data?.length}</h2>
      <div className='grid grid-cols-1 gap-2'>
        {products?.data.map((product) => {
          return (
            <div
              className='border flex gap-1 place-items-center px-2 rounded-md border-white'
              key={product?._id}
            >
              <Image
                src={product?.img1}
                width={100}
                height={150}
                alt='parts image'
              />
              <div className=' flex w-full justify-between place-items-center'>
                <div>
                  <h3>{product?.Category}</h3>
                  <p>{product?.Model}</p>
                  <p> {product?.Brand}</p>
                  <p> {product?.Price}</p>
                </div>
                <div>
                  <button
                    onClick={() => updateParts(product)}
                    className='border bg-green-600 py-1 px-4 rounded-sm'
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProduct;

AllProduct.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getStaticProps = async () => {
  const result = await fetch(
    `https://pc-builder-gules-psi.vercel.app/api/v1/pc-parts`
  );
  const data = await result?.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
};

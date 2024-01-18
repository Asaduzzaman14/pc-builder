import DashboardLayout from "@/components/Layoutes/DashboardLayout";
import Image from "next/image";
import React from "react";

const allProduct = ({ products }) => {
  const updateParts = () => {
    console.log("update data");
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
                </div>
                <div>
                  <button
                    onClick={updateParts}
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

export default allProduct;

allProduct.getLayout = function getLayout(page) {
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

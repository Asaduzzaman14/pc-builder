import RootLayout from "@/components/Layoutes/RootLayout";
import { Button, Card, Rate } from "antd";
import Link from "next/link";
import Image from "next/image";

import React from "react";

const ProductDetails = ({ product }) => {
  // console.log("product", product);
  return (
    <div>
      <h2 className='pt-2'> product details {product?.Category} </h2>
      <div className='flex justify-center mt-7'>
        <div
          key={product._id}
          className='grid lg:grid-cols-2 justify-items-start lg:justify-items-center gap-2 lg:gap-5 p-3'
        >
          <div className='mx-auto'>
            <Image alt='image' width={500} height={500} src={product?.img1} />
            {/* <Image alt='aa' width={500} height={500} src={product?.img2} /> */}
          </div>

          <div className='text-base font-medium text-gray-300'>
            <p>Category: {product?.Category}</p>
            <p>Brand: {product?.Brand}</p>
            <p>Price: {product?.Price}</p>
            <p>Status: {product?.Status}</p>

            {/* <p>Rating: {product?.AvgRatings}</p> */}
            <>
              Rating:{" "}
              <Rate
                className=''
                allowHalf
                disabled
                defaultValue={product?.AvgRatings}
              />
            </>
            {product?.Frequency && <p>Frequency: {product?.Frequency}</p>}
            {product?.Latency && <p>Latency: {product?.Latency}</p>}
            {product?.Model && <p>Model: {product?.Model}</p>}
            {product?.Voltage && <p>Voltage: {product?.Voltage}</p>}
            {product?.Details && (
              <p>Details: {product?.Details?.slice(0, 155)}...</p>
            )}

            <div>
              <button className='border px-3 py-2 rounded mt-4 bg-sky-500 text-gray-900'>
                Add To Build
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='p-2 mt-5'>
        <h3 className='text-2xl font-bold'>User Reviews</h3>
        <div>
          {product?.Reviews?.map((review, index) => (
            <div key={index} className='py-3'>
              <p>
                {" "}
                {index + 1}. {review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builder-gules-psi.vercel.app/api/v1/pc-parts"
  );
  const parts = await res.json();
  console.log(parts.data);

  const paths = parts?.data?.map((part) => ({
    params: { partId: part._id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  console.log(context);
  const { params } = context;
  console.log(params, "parms");
  const res = await fetch(
    `https://pc-builder-gules-psi.vercel.app/api/v1/pc-parts/${params?.partId}`
  );

  const data = await res.json();
  console.log(data);
  return {
    props: {
      product: data?.data,
    },
  };
};

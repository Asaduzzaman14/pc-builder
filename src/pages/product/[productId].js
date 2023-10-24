import RootLayout from "@/components/Layoutes/RootLayout";
import { Button, Card, Image } from "antd";
import Link from "next/link";
import React from "react";

const ProductDetails = ({ product }) => {
  console.log(product);
  return (
    <div>
      <h2>This is product details: {product?.catagory} </h2>
      <div className='flex justify-center mt-10'>
        <div
          key={product._id}
          className='grid grid-cols-2 gap-5 p-3 justify-items-center bg-slate-900'
        >
          <div>
            <Image alt='aa' width={500} height={500} src={product?.img1} />
          </div>
          <div className='text-base font-medium text-gray-300'>
            <p>Name: {product?.category}</p>
            <p>Brand: {product?.brand}</p>
            <p>Price: {product?.price}</p>
            <p>Status: {product?.status}</p>
            <p>Details: {product.details}</p>
            <p>Rating: this is Rating</p>
          </div>
        </div>
      </div>
      <div className='p-2 mt-5'>
        <h3 className='text-2xl font-bold'>Reviews</h3>
        <div>
          {product?.reviews?.map((review, index) => (
            <div key={index}>
              <p> {review}</p>
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
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { productId: product.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-gules-psi.vercel.app/api/v1/pc-parts/${params.productId}`
  );

  const data = await res.json();
  console.log(data);
  return {
    props: {
      product: data.data,
    },
  };
};

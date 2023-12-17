import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedProducts = ({ products }) => {
  return (
    <div className='mt-10 parts-body'>
      <h2>FEATURED PRODUCTS</h2>
      <div className='colors'></div>
      <div className='mt-5'>
        <div className='grid justify-items-center md:grid-cols-2  lg:grid-cols-3 gap-5'>
          {products?.map((product) => (
            <Card
              key={product._id}
              hoverable
              className='p-0 bg-slate-900'
              style={{ width: 250, padding: "0px", margin: "0" }}
            >
              <div className='py-3'>
                <Image
                  alt='aa'
                  className='rounded-md'
                  width={300}
                  loading='lazy'
                  height={500}
                  src={product?.img1}
                />
                <div className='text-base font-medium text-gray-300'>
                  <p>Category: {product?.Category}</p>
                  <p>Brand: {product?.Brand}</p>
                  <p>Price: {product?.Price}</p>
                  <p>Status: {product?.Status}</p>
                  <p>Rating: {product?.AvgRatings}</p>
                </div>
                <div className='pt-3 text-center text-white'>
                  <Link href={`/product/${product?._id}`}>
                    <Button className='text-white'>DETAILS</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

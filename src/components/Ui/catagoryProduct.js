import { addToCart } from "@/redux/features/build";
import { Button, Card, Image, Rate } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const CatagoryProduct = ({ product }) => {
  const router = useRouter();
  console.log(product, "1111");
  const dispatch = useDispatch();

  // if (!product) {
  //   return <h2>Loading...</h2>;
  // }

  const handleAddProduct = (paylode) => {
    dispatch(addToCart(paylode));
    router.push("/build-pc");
  };

  return (
    <div className='grid justify-items-center '>
      {/* {products?.map((product) => ( */}
      <Card
        key={product?._id}
        className='p-0 border-0 hover:border bg-slate-900'
        style={{
          width: 550,
          border: "1px  solid #fff",
          padding: "0px",
          margin: "0",
        }}
      >
        <div className='flex justify-between gap-5 items-center'>
          <Image alt='aa' width={300} height={"100%"} src={product?.img1} />
          <div className='text-base  text-gray-300'>
            <p>Category: {product?.Category}</p>
            <p>Brand: {product?.Brand}</p>
            <p>Price: {product?.Price}</p>
            <p>Status: {product?.Status}</p>
            {/* <p>Rating: {product?.AvgRatings}</p> */}
            <p>
              Rating: <Rate allowHalf disabled defaultValue={2.5} />
            </p>
          </div>

          <div className='flex flex-col gap-2 items-stretch justify-items-stretch'>
            <Link href={`/product/${product?._id}`}>
              <Button className='text-white'>DETAILS</Button>
            </Link>

            <div onClick={() => handleAddProduct(product)}>
              <Button className='text-white w-full'>Add</Button>
            </div>
          </div>
        </div>
      </Card>
      {/* ))} */}
    </div>
  );
};

export default CatagoryProduct;

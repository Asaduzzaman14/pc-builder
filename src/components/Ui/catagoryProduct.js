import { addToCart } from "@/redux/features/build";
import { Button, Card, Carousel, Image, Rate } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { useDispatch } from "react-redux";

const CatagoryProduct = ({ product }) => {
  const settings = {
    className: " text-white text-left bg-color  rounded-md",
    autoplay: true,
    dots: false,
    speed: 1000,
  };
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
    <div className='grid justify-items-center'>
      {/* {products?.map((product) => ( */}
      <Card
        key={product?._id}
        className='p-0 py-5 border-0 w-fit hover:border bg-slate-900'
        style={{
          // width: 550,
          border: "1px  solid #fff",
          padding: "10px 0",
          margin: "0",
        }}
      >
        <div className='p-0 justify-between gap-5 items-center'>
          <div>
            <Carousel {...settings} className='w-[200px] pb-3 rounded-md'>
              <div>
                <div>
                  <Image
                    className=' rounded-sm'
                    alt='aa'
                    width={200}
                    height={"100%"}
                    src={product?.img1}
                  />
                </div>
              </div>
              <div>
                <div>
                  <Image
                    className=' rounded-sm'
                    alt='aa'
                    width={200}
                    height={"100%"}
                    src={product?.img2}
                  />
                </div>
              </div>
            </Carousel>
          </div>

          {/* <Image
            className='rounded-lg'
            alt='aa'
            width={200}
            height={"100%"}
            src={product?.img1}
          /> */}

          <div>
            <div className='text-base p-0  text-gray-300'>
              <p className='text-xs lg:text-sm'>
                Category: {product?.Category}
              </p>
              <p className='text-xs lg:text-sm'>Brand: {product?.Brand}</p>
              <p className='text-xs lg:text-sm'>Price: {product?.Price}</p>
              <p className='text-xs lg:text-sm'>Status: {product?.Status}</p>
              <div className='flex gap-x-1'>
                <p className='inline-block text-xs lg:text-sm'>Rating:</p>
                <Rate
                  className='text-xs lg:text-sm'
                  allowHalf
                  disabled
                  defaultValue={product?.AvgRatings}
                />
              </div>
            </div>

            {/* buttons  */}

            <div className='pt-2 flex gap-2 items-end justify-items-end align-bottom mt-auto'>
              <Link href={`/product/${product?._id}`}>
                <Button className='text-white w-[85px]'>DETAILS</Button>
              </Link>

              <div onClick={() => handleAddProduct(product)}>
                <Button className='text-white w-[85px]'>Add</Button>
              </div>
            </div>

            {/* buttons  */}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CatagoryProduct;

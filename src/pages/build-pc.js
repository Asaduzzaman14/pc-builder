import RootLayout from "@/components/Layoutes/RootLayout";
import { Button, Card, Image } from "antd";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import {
  BsDeviceSsd,
  BsFillMotherboardFill,
  BsMouseFill,
} from "react-icons/bs";
import { GiProcessor, GiStickFrame, GiWoodFrame } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";
import { MdOutlineStorage } from "react-icons/md";
import { FaFilePowerpoint } from "react-icons/fa";

const buildPc = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { products, catagory } = useSelector((state) => state.cart);

  console.log(products);
  console.log(catagory);

  return (
    <div>
      <h2>BUILD YOUR PC</h2>
      <div className=''>
        <div className='grid gap-5 mt-10'>
          <div className='border-2 rounded-lg '>
            <div className='flex justify-between items-center px-2'>
              <div className='flex justify-center items-center'>
                <span className='p-4'>
                  <GiProcessor className='text-5xl' />
                </span>

                <p className=' p-4 rounded-md '>Processor </p>
              </div>

              {catagory?.find((element) => element == "processor") ? (
                <Button className='text-white'>Selected</Button>
              ) : (
                <Link href='/build/processor'>
                  <Button className='text-white'>Select</Button>
                </Link>
              )}
            </div>
          </div>
          <div className='border-2 rounded-lg '>
            <div className='flex justify-between items-center px-2'>
              <div className='flex justify-center items-center'>
                <span className='p-4'>
                  <BsFillMotherboardFill className='text-5xl' />
                </span>
                <p className=' p-4 rounded-md '>Motherboard </p>
              </div>

              {catagory?.find((element) => element == "motherboard") ? (
                <Button className='text-white'>Selected</Button>
              ) : (
                <Link href='/build/motherboard'>
                  <Button className='text-white'>Select</Button>
                </Link>
              )}
            </div>
          </div>
          <div className='border-2 rounded-lg '>
            <div className='flex justify-between items-center px-2'>
              <div className='flex justify-center items-center'>
                <span className='p-4'>
                  <BsDeviceSsd className='text-5xl' />
                </span>
                <p className=' p-4 rounded-md '>RAM </p>
              </div>

              {catagory?.find((element) => element == "ram") ? (
                <Button className='text-white'>Selected</Button>
              ) : (
                <Link href='/build/ram'>
                  <Button className='text-white'>Select</Button>
                </Link>
              )}
            </div>
          </div>

          <div className='border-2 rounded-lg '>
            <div className='flex justify-between items-center px-2'>
              <div className='flex justify-center items-center'>
                <span className='p-4'>
                  <FaFilePowerpoint className='text-5xl' />
                </span>

                <p className=' p-4 rounded-md '>Power Supply Unit </p>
              </div>

              {catagory?.find((element) => element == "Power supply unit") ? (
                <Button className='text-white'>Selected</Button>
              ) : (
                <Link href='/build/powerSupplyUnit'>
                  <Button className='text-white'>Select</Button>
                </Link>
              )}
            </div>
          </div>
          <div className='border-2 rounded-lg '>
            <div className='flex justify-between items-center px-2'>
              <div className='flex justify-center items-center'>
                <span className='p-4'>
                  <MdOutlineStorage className='text-5xl' />
                </span>
                <p className=' p-4 rounded-md '>Storage Device </p>
              </div>

              {catagory?.find((element) => element == "storage device") ? (
                <Button className='text-white'>Selected</Button>
              ) : (
                <Link href='/build/storageDevice'>
                  <Button className='text-white'>Select</Button>
                </Link>
              )}
            </div>
          </div>
          <div className='border-2 rounded-lg '>
            <div className='flex justify-between items-center px-2'>
              <div className='flex justify-center items-center'>
                <span className='p-4'>
                  <FiMonitor className='text-5xl text-white' />
                </span>
                <p className=' p-4 rounded-md '>Monitor </p>
              </div>
              {catagory?.find((element) => element == "monitor") ? (
                <Button className='text-white'>Selected</Button>
              ) : (
                <Link href='/build/storageDevice'>
                  <Button className='text-white'>Select</Button>
                </Link>
              )}
            </div>
          </div>
          <div className='border-2 rounded-lg '>
            <div className='flex justify-between items-center px-2'>
              <div className='flex justify-center items-center'>
                <span className='p-4'>
                  <BsMouseFill className='text-5xl' />
                </span>
                <p className=' p-4 rounded-md '>Mouse </p>
              </div>

              {catagory?.find((element) => element == "mouse") ? (
                <Button className='text-white'>Selected</Button>
              ) : (
                <Link href='/build/mouse'>
                  <Button className='text-white'>Select</Button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className='my-5 text-center'>
          <Button className='text-white my-4'>BUILD</Button>
          <div className='grid justify-items-center md:grid-cols-2  gap-3'>
            {products?.map((product) => {
              return (
                <Card
                  key={product.id}
                  className='p-0  bg-slate-900'
                  style={{
                    padding: "5px",
                    width: 350,
                    padding: "0px",
                    margin: "0",
                  }}
                >
                  <div className='flex justify-between gap-5 items-center'>
                    <div className='flex gap-5'>
                      <Image
                        alt='aa'
                        width={100}
                        height={100}
                        src={product?.img1}
                      />
                      <div className='text-base font-medium text-gray-300'>
                        <p>Name: {product?.Category}</p>
                        <p>Price: {product?.Price}</p>
                        <p>Status: {product?.Status}</p>
                        <p>Rating: {product?.AvgRatings}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default buildPc;

buildPc.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getServerSideProps = async () => {

//     const result = await fetch('http://localhost:3000/parts')

//     const data = await result.json()

//     return {
//         props: {
//             catagory: data
//         },
//     }
// }

import RootLayout from "@/components/Layoutes/RootLayout";
import { Button, Card, Image } from "antd";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import {
  BsDeviceSsd,
  BsFillCassetteFill,
  BsFillMotherboardFill,
  BsGpuCard,
  BsMouseFill,
} from "react-icons/bs";
import {
  GiApolloCapsule,
  GiProcessor,
  GiStickFrame,
  GiWoodFrame,
} from "react-icons/gi";
import { FiMonitor, FiSpeaker } from "react-icons/fi";
import { PiComputerTower } from "react-icons/pi";
import { FaKeyboard } from "react-icons/fa";
import { RiZcoolLine } from "react-icons/ri";
import { CgSmartphoneRam } from "react-icons/cg";

const buildPc = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { products, catagory } = useSelector((state) => state.cart);

  return (
    <div>
      <h2>BUILD YOUR PC</h2>
      <div className=''>
        <div className='grid gap-5 mt-10'>
          {/* Casing */}
          <div className='border-2 rounded-lg '>
            <div className='flex justify-between items-center px-2'>
              <div className='flex justify-center items-center'>
                <span className='p-4'>
                  <PiComputerTower className='text-5xl' />
                </span>

                <p className=' p-4 rounded-md '>Casing </p>
              </div>

              {catagory?.find((element) => element == "Casing") ? (
                <Button className='text-white bg-green-400  hover:text-gray-700'>
                  Selected
                </Button>
              ) : (
                <Link href='/build/casing?query=Casing'>
                  <Button className='text-white'>Select</Button>
                </Link>
              )}
            </div>
          </div>
          {/* Cpu Cooler */}
          <div className='border-2 rounded-lg '>
            <div className='flex justify-between items-center px-2'>
              <div className='flex justify-center items-center'>
                <span className='p-4'>
                  <RiZcoolLine className='text-5xl' />
                </span>

                <p className=' p-4 rounded-md '>Cpu Cooler </p>
              </div>

              {catagory?.find((element) => element == "Cpu Cooler") ? (
                <Button className='text-white bg-green-400 hover:text-gray-700'>
                  Selected
                </Button>
              ) : (
                <Link href='/build/cpu-cooler?query=Cpu-Cooler'>
                  <Button className='text-white'>Select</Button>
                </Link>
              )}
            </div>
          </div>
          {/* CPU  */}
          <div className='border-2 rounded-lg '>
            <div className='flex justify-between items-center px-2'>
              <div className='flex justify-center items-center'>
                <span className='p-4'>
                  <GiProcessor className='text-5xl' />
                </span>

                <p className=' p-4 rounded-md '>Cpu</p>
              </div>

              {catagory?.find((element) => element == "Cpu") ? (
                <Button className='text-white bg-green-400 hover:text-gray-700'>
                  Selected
                </Button>
              ) : (
                <Link href='/build/cpu?query=Cpu'>
                  <Button className='text-white'>Select</Button>
                </Link>
              )}
            </div>
          </div>

          {/* GPU */}
          <div className='border-2 rounded-lg'>
            <div className='flex justify-between items-center px-2'>
              <div className='flex justify-center items-center'>
                <span className='p-4'>
                  <BsGpuCard className='text-5xl' />
                </span>

                <p className=' p-4 rounded-md '>GPU </p>
              </div>

              {catagory?.find((element) => element == "processor") ? (
                <Button className='text-white bg-green-400 hover:text-gray-700'>
                  Selected
                </Button>
              ) : (
                <Link href='/build/gpu?query=GPU'>
                  <Button className='text-white'>Select</Button>
                </Link>
              )}
            </div>
          </div>

          {/* Keyboard */}
          <div className='border-2 rounded-lg'>
            <div className='flex justify-between items-center px-2'>
              <div className='flex justify-center items-center'>
                <span className='p-4'>
                  <FaKeyboard className='text-5xl' />
                </span>

                <p className=' p-4 rounded-md '>Keyboard </p>
              </div>

              {catagory?.find((element) => element == "processor") ? (
                <Button className='text-white bg-green-400 hover:text-gray-700'>
                  Selected
                </Button>
              ) : (
                <Link href='/build/Keyboard?query=Keyboard'>
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

              {catagory?.find((element) => element == "Motherboard") ? (
                <Button className='text-white bg-green-400 hover:text-gray-700'>
                  Selected
                </Button>
              ) : (
                <Link href='/build/Motherboard?query=Motherboard'>
                  <Button className='text-white'>Select</Button>
                </Link>
              )}
            </div>
          </div>

          {/* mouse */}
          <div className='border-2 rounded-lg '>
            <div className='flex justify-between items-center px-2'>
              <div className='flex justify-center items-center'>
                <span className='p-4'>
                  <BsMouseFill className='text-5xl' />
                </span>
                <p className=' p-4 rounded-md '>Mouse </p>
              </div>

              {catagory?.find((element) => element == "Mouse") ? (
                <Button className='text-white bg-green-400 hover:text-gray-700'>
                  Selected
                </Button>
              ) : (
                <Link href='/build/Mouse?query=Mouse'>
                  <Button className='text-white'>Select</Button>
                </Link>
              )}
            </div>
          </div>

          <div className='border-2 rounded-lg'>
            <div className='flex justify-between items-center px-2'>
              <div className='flex justify-center items-center'>
                <span className='p-4'>
                  <FiSpeaker className='text-5xl' />
                </span>

                <p className=' p-4 rounded-md '>Speaker </p>
              </div>

              {catagory?.find((element) => element == "processor") ? (
                <Button className='text-white bg-green-400 hover:text-gray-700'>
                  Selected
                </Button>
              ) : (
                <Link href='/build/Speaker?query=Speaker'>
                  <Button className='text-white'>Select</Button>
                </Link>
              )}
            </div>
          </div>

          <div className='border-2 rounded-lg'>
            <div className='flex justify-between items-center px-2'>
              <div className='flex justify-center items-center'>
                <span className='p-4'>
                  <GiApolloCapsule className='text-5xl' />
                </span>

                <p className=' p-4 rounded-md '>PSU</p>
              </div>

              {catagory?.find((element) => element == "PSU") ? (
                <Button className='text-white bg-green-400 hover:text-gray-700'>
                  Selected
                </Button>
              ) : (
                <Link href='/build/PSU?query=PSU'>
                  <Button className='text-white'>Select</Button>
                </Link>
              )}
            </div>
          </div>

          <div className='border-2 rounded-lg '>
            <div className='flex justify-between items-center px-2'>
              <div className='flex justify-center items-center'>
                <span className='p-4'>
                  <CgSmartphoneRam className='text-5xl' />
                </span>
                <p className=' p-4 rounded-md '>RAM </p>
              </div>

              {catagory?.find((element) => element == "Ram") ? (
                <Button className='text-white bg-green-400 hover:text-gray-700'>
                  Selected
                </Button>
              ) : (
                <Link href='/build/ram?query=Ram'>
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
                <p className=' p-4 rounded-md '>SSD </p>
              </div>

              {catagory?.find((element) => element == "SSD") ? (
                <Button className='text-white bg-green-400 hover:text-gray-700'>
                  Selected
                </Button>
              ) : (
                <Link href='/build/SSD?query=SSD'>
                  <Button className='text-white'>Select</Button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className='my-5 text-center'>
          <div className='grid justify-items-center md:grid-cols-2  gap-3'>
            {products?.map((product) => {
              return (
                <Card
                  key={product._id}
                  className='bg-[#3c94b4]'
                  style={{
                    padding: "2px",
                    width: 350,
                    margin: "0",
                  }}
                >
                  <div className='flex justify-between gap-5 items-center'>
                    <div className='flex gap-5'>
                      <Image
                        alt='image'
                        className='rounded-sm'
                        width={80}
                        height={80}
                        src={product?.img1}
                      />
                      <div className='text-base font-medium text-gray-300'>
                        <p>Name: {product?.Category}</p>
                        <p>Price: {product?.Price}</p>
                        <p>Status: {product?.Status}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          {products.length > 0 && (
            <Button className='text-white my-4'>BUILD</Button>
          )}
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

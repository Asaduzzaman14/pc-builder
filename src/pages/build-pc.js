import RootLayout from "@/components/Layoutes/RootLayout";
import { Button, Card, Image } from "antd";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BsDeviceSsd,
  BsFillCassetteFill,
  BsFillMotherboardFill,
  BsGpuCard,
  BsMouseFill,
} from "react-icons/bs";
import { GiApolloCapsule, GiProcessor } from "react-icons/gi";
import { FiMonitor, FiSpeaker } from "react-icons/fi";
import { PiComputerTower } from "react-icons/pi";
import { FaKeyboard } from "react-icons/fa";
import { RiZcoolLine } from "react-icons/ri";
import { CgSmartphoneRam } from "react-icons/cg";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { clearCart } from "@/redux/features/build";

const BuildPc = () => {
  const { data: session } = useSession();
  const { products, catagory } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const myData = {
    email: session?.user?.email,
    products: products,
  };
  // console.log(myData);

  const buildPc = async () => {
    if (!session?.user?.email) {
      router.push("/login");
    }

    try {
      if (products.length < 5) {
        return Swal.fire({
          text: "Please select a minimum of 5 parts",
          icon: "warning",
        });
      }
      const response = await fetch(
        // "http://localhost:5000/api/v1/pc-build",
        "https://pc-builder-gules-psi.vercel.app/api/v1/pc-build",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(myData),
        }
      );
      const resData = await response?.json();
      if (resData) {
        dispatch(clearCart());

        Swal.fire({
          title: "Build success",
          icon: "success",
        });
      }
      console.log(resData);
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };

  useEffect(() => {
    const scrollToMiddle = () => {
      // Calculate the middle position based on the page height
      const middlePosition = Math.floor(document.body.scrollHeight / 1.5);

      // Scroll to the middle position
      window.scrollTo(0, middlePosition);
    };

    // Call the scrollToMiddle function when the component mounts
    scrollToMiddle();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <h2 className='pt-4'>BUILD YOUR PC</h2>
      <div className=''>
        <div className='grid gap-5 mt-10 px-4 lg:px-8'>
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
                <Link href='/build/Casing?query=Casing'>
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

              {catagory?.find((element) => element == "CPU") ? (
                <Button className='text-white bg-green-400 hover:text-gray-700'>
                  Selected
                </Button>
              ) : (
                <Link href='/build/cpu?query=CPU'>
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

              {catagory?.find((element) => element == "GPU") ? (
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

                <p className=' p-4 rounded-md '>Keyboard</p>
              </div>

              {catagory?.find((element) => element == "Keyboard") ? (
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

              {catagory?.find((element) => element == "MotherBoard") ? (
                <Button className='text-white bg-green-400 hover:text-gray-700'>
                  Selected
                </Button>
              ) : (
                <Link href='/build/MotherBoard?query=MotherBoard'>
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

              {catagory?.find((element) => element == "RAM") ? (
                <Button className='text-white bg-green-400 hover:text-gray-700'>
                  Selected
                </Button>
              ) : (
                <Link href='/build/ram?query=RAM'>
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
          {products?.length == 0 && (
            <h3 className='py-2 text-md text-red-500'>
              Please Select Some Parts for build your pc *
            </h3>
          )}
          {products?.length > 0 && <h2 className='py-2'>MY PARTS</h2>}
          <div className='grid justify-items-center md:grid-cols-2  gap-3'>
            {products?.map((product) => {
              return (
                <Card
                  key={product._id}
                  className='bg-[#e2e3e3]'
                  style={{
                    padding: "8px 0",
                    width: 350,
                    margin: "0",
                  }}
                >
                  <div className='flex justify-between gap-5 items-center'>
                    <div className='flex gap-5'>
                      <Image
                        alt='image'
                        className='rounded-md shadow-gray-400 shadow-md'
                        width={80}
                        height={80}
                        src={product?.img1}
                      />
                      <div className='text-base text-left font-medium text-gray-900'>
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
            <Button
              onClick={() => buildPc()}
              className=' my-4 px-5 mt-10 bg-sky-300 text-black font-semibold'
            >
              BUILD
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildPc;

BuildPc.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

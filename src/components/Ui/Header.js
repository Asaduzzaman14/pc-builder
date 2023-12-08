import { Button, Dropdown, FloatButton, Layout, Menu, Space } from "antd";
const { Header } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { auth } from "@/firebase/firebase.auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsArrowDown } from "react-icons/bs";

const items = [
  {
    label: (
      <Link rel='noopener ' className='font-medium' href='/category/casing'>
        Casing
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link rel='noopener' className='font-medium' href='/category/cpu-cooler'>
        Cpu Cooler
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link rel='noopener' className='font-medium' href='/category/cpu'>
        Cpu
      </Link>
    ),
    key: "2",
  },
  {
    label: (
      <Link rel='noopener' className='font-medium' href='/category/gpu'>
        GPU
      </Link>
    ),
    key: "3",
  },
  {
    label: (
      <Link rel='' className='font-medium' href='/category/keyboard'>
        Keyboard
      </Link>
    ),
    key: "4",
  },
  {
    label: (
      <Link rel='' className='font-medium' href='/category/motherboard'>
        Motherboard
      </Link>
    ),
    key: "5",
  },
  {
    label: (
      <Link rel='' className='font-medium' href='/category/mouse'>
        Mouse
      </Link>
    ),
    key: "6",
  },
  {
    label: (
      <Link rel='' className='font-medium' href='/category/speaker'>
        Speaker
      </Link>
    ),
    key: "7",
  },
  {
    label: (
      <Link rel='' className='font-medium' href='/category/monitor'>
        Monitor
      </Link>
    ),
    key: "8",
  },
  {
    label: (
      <Link rel='' className='font-medium' href='/category/psu'>
        PSU
      </Link>
    ),
    key: "9",
  },

  {
    label: (
      <Link rel='' className='font-medium' href='/category/ram'>
        RAM
      </Link>
    ),
    key: "10",
  },
  {
    label: (
      <Link rel='' className='font-medium' href='/category/ssd'>
        SSD
      </Link>
    ),
    key: "11",
  },
];

const App = () => {
  let [open, setOpen] = useState(false);
  const { data: session } = useSession();

  const [user, loadign, err] = useAuthState(auth);

  const signOutUser = () => {
    if (user?.email) {
      auth
        .signOut()
        .then(() => {
          // Sign-out successful.
          console.log("User signed out");
        })
        .catch((error) => {
          // An error happened.
          console.error("Error signing out:", error.message);
        });
    } else {
      signOut();
    }
  };
  return (
    <>
      <div className=' shadow-md z-50 w-full  relative top-0 left-0'>
        {/* <div className=' md:flex justify-between items-center bg-gray-900 text-white'> */}
        <div className=' md:flex justify-between lg:px-10 bg-gray-900 text-white'>
          <div className=' lg:flex-basis-1/4 lg:py-2 '>
            <Link href='/' class=''>
              <h2 className='text-2xl text-left font-bold py-4 ml-5 lg:ml-8 text-primary'>
                PC builder
              </h2>
            </Link>
          </div>

          {/* mobile icon  */}
          <div
            onClick={() => setOpen(!open)}
            className='text-3xl font-bold text-md absolute right-8 top-4 cursor-pointer lg:hidden'
          >
            <ion-icon name={open ? "close" : "menu"}>
              {open ? <IoMdClose /> : <CiMenuBurger />}
            </ion-icon>
          </div>

          <div className=' px-0 '>
            <ul
              className={`  lg:flex justify-between lg:pr-5 lg:items-end lg:py-0  lg:pb-0 pb-8 absolute lg:static bg-gray-900 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0  transition-all duration-500 ease-in ${
                open ? "top-[60px]" : "top-[-480px]"
              }`}
            >
              <div className='lg:flex ml-5 lg lg:justify-between'>
                <li
                  className={`relative px-2 group md:ml-3 text-xl md:my-0 py-4 transition-all duration-500 ease-in`}
                >
                  <Dropdown
                    menu={{
                      items,
                    }}
                    className='w-32'
                  >
                    <div className='flex items-center font-medium gap-1'>
                      <p onClick={(e) => e.preventDefault()}>Categories</p>
                      <BsArrowDown className='text-sm mt-1' />
                    </div>
                  </Dropdown>
                </li>
                <li
                  className={`relative group md:ml-3 text-xl md:my-0 py-4 transition-all duration-500 ease-in`}
                >
                  <Link
                    onClick={() => setOpen(!open)}
                    href='/about'
                    className='text-lg text-gray-200 p-2 delay-300 translate-x-0 hover:translate-x-3  hover:text-sky-500 font-semibold transition-all duration-800'
                  >
                    ABOUT
                  </Link>
                </li>

                <li
                  className={`relative group md:ml-3 text-xl md:my-0 py-4 transition-all duration-500 ease-in`}
                >
                  <Link
                    onClick={() => setOpen(!open)}
                    href='/blogs'
                    className='text-lg text-gray-200 p-2 delay-300 translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-sky-500 font-semibold transition-all duration-800'
                  >
                    BLOGS
                  </Link>
                </li>
                <li
                  className={`relative group md:ml-3 text-xl md:my-0 py-4 transition-all duration-500 ease-in`}
                >
                  <Link
                    onClick={() => setOpen(!open)}
                    href='/my-pc'
                    className='text-lg text-gray-200 p-2 delay-300 translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-sky-500 font-semibold transition-all duration-800'
                  >
                    MY PC
                  </Link>
                </li>
                <li
                  onClick={() => setOpen(!open)}
                  className='md:ml-3 md:my-0  py-4 transition-all duration-500 ease-in '
                >
                  <Button>
                    <Link
                      href='/build-pc'
                      style={{
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "3px",
                      }}
                    >
                      Build PC
                    </Link>
                  </Button>
                </li>
                <li
                  onClick={() => setOpen(!open)}
                  className='md:ml-3 md:my-0  py-4 transition-all duration-500 ease-in '
                >
                  {session?.user || user?.email ? (
                    <Button onClick={() => signOutUser()} type='primary' danger>
                      Logout
                    </Button>
                  ) : (
                    <Link
                      href='/login'
                      className='text-lg text-gray-200 p-2 delay-300 translate-x-0 hover:translate-x-3 underline-offset-[20px] hover:text-sky-500 font-semibold transition-all duration-800'
                    >
                      Login
                    </Link>
                  )}
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

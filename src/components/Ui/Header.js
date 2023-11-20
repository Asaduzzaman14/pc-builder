import { Button, Dropdown, FloatButton, Layout, Menu, Space } from "antd";
const { Header } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

const items = [
  {
    label: (
      <Link rel='noopener ' href='/category/casing'>
        Casing
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link rel='noopener ' href='/category/cpu-cooler'>
        Cpu Cooler
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link rel='noopener ' href='/category/cpu'>
        Cpu
      </Link>
    ),
    key: "2",
  },
  {
    label: (
      <Link rel='noopener ' href='/category/gpu'>
        GPU
      </Link>
    ),
    key: "3",
  },
  {
    label: (
      <Link rel='' href='/category/keyboard'>
        Keyboard
      </Link>
    ),
    key: "4",
  },
  {
    label: (
      <Link rel='' href='/category/motherboard'>
        Motherboard
      </Link>
    ),
    key: "5",
  },
  {
    label: (
      <Link rel='' href='/category/mouse'>
        Mouse
      </Link>
    ),
    key: "6",
  },
  {
    label: (
      <Link rel='' href='/category/speaker'>
        Speaker
      </Link>
    ),
    key: "7",
  },
  {
    label: (
      <Link rel='' href='/category/monitor'>
        Monitor
      </Link>
    ),
    key: "8",
  },
  {
    label: (
      <Link rel='' href='/category/psu'>
        PSU
      </Link>
    ),
    key: "9",
  },

  {
    label: (
      <Link rel='' href='/category/ram'>
        RAM
      </Link>
    ),
    key: "10",
  },
  {
    label: (
      <Link rel='' href='/category/ssd'>
        SSD
      </Link>
    ),
    key: "11",
  },
];

const App = () => {
  const { data: session } = useSession();
  const [show, setShow] = useState(false);

  console.log(session?.user?.name);
  {
    /* {session.user && <h2 style={{ textAlign: "center", marginTop: "2%" }}>Logdin User: {session?.user?.name}</h2>} */
  }

  return (
    <Layout className='layout'>
      <Header className='flex justify-between'>
        <div className='bg-transparent  text-white  justify-between'>
          <Link className='font-bold text-2xl text-white' href='/'>
            Build PC
          </Link>
          {/* <span onClick={() => setShow(!show)} className="ms-20 cursor-pointer">icon</span> */}
        </div>
        <Menu
          theme='dark'
          className={`${styles.menu_items} inline-flex items-center gap-3 font-semibold `}
        >
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>Categories</Space>
            </a>
          </Dropdown>

          <Link href='/about'>
            <items>About Us</items>
          </Link>
          <Link href='/contact'>
            <items className=''>Contact Us</items>
          </Link>
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
          {session?.user ? (
            <Button onClick={() => signOut()} type='primary' danger>
              Logout
            </Button>
          ) : (
            <Link href='/login'>
              <items className=''>Login</items>
            </Link>
          )}
        </Menu>
      </Header>
    </Layout>
  );
};

export default App;

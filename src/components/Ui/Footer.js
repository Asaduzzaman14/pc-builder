import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 p-10  bg-slate-800 text-base-content'>
        <div>
          <p>Providing reliable tech since 2020</p>
        </div>
        <div>
          <h3 className='footer-title text-lg font-semibold text-[#39d6f6]'>
            Services
          </h3>

          <div>
            <Link
              href={"/"}
              className='link link-hover hover:tracking-widest duration-200'
            >
              Branding
            </Link>
          </div>

          <div>
            <Link
              href='/'
              className='link link-hover  hover:tracking-widest duration-200'
            >
              Design
            </Link>
          </div>
          <div>
            <Link
              href='/'
              className='link link-hover  hover:tracking-widest duration-200'
            >
              Marketing
            </Link>
          </div>
          <div>
            <Link
              href='/'
              className='link link-hover  hover:tracking-widest duration-200'
            >
              Advertisement
            </Link>
          </div>
        </div>
        <div>
          <h3 className='footer-title text-lg font-semibold text-[#39d6f6]'>
            Company
          </h3>
          <div>
            <Link
              href={"/"}
              className='link link-hover  hover:tracking-widest duration-200'
            >
              About us
            </Link>
          </div>
          <div>
            <Link
              href={"/"}
              className='link link-hover  hover:tracking-widest duration-200'
            >
              Contact
            </Link>
          </div>
          <div>
            <Link
              href={"/"}
              className='link link-hover  hover:tracking-widest duration-200'
            >
              Jobs
            </Link>
          </div>
          <div>
            <Link
              href={"/"}
              className='link link-hover  hover:tracking-widest duration-200'
            >
              Press kit
            </Link>
          </div>
        </div>
        <div>
          <h3 className='footer-title text-lg font-semibold text-[#39d6f6]'>
            Legal
          </h3>
          <div>
            <Link
              href={"/"}
              className='link link-hover  hover:tracking-widest duration-200'
            >
              Terms of use
            </Link>
          </div>
          <div>
            <Link
              href={"/"}
              className='link link-hover  hover:tracking-widest duration-200'
            >
              Privacy policy
            </Link>
          </div>

          <div>
            <Link
              href={"/"}
              className='link link-hover  hover:tracking-widest duration-200'
            >
              Cookie policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

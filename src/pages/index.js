import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import RootLayout from "@/components/Layoutes/RootLayout";
import Banner from "@/components/Ui/Banner";
import FeaturedProducts from "@/components/Ui/FeaturedProducts";
import FeaturedCategories from "@/components/Ui/FeaturedCategories";
import CatagoryProduct from "@/components/Ui/catagoryProduct";
import { useState } from "react";
import OurClient from "@/components/Ui/OurClient";

export default function Home({ products }) {
  // console.log(products);

  return (
    <>
      <Head>
        <title>Pc Builder</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <>
        <Banner />
        <FeaturedProducts products={products.data} />
        <FeaturedCategories />
        <OurClient />
      </>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const result = await fetch(
    `https://pc-builder-gules-psi.vercel.app/api/v1/pc-parts?limit=20`
  );
  const data = await result?.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
};

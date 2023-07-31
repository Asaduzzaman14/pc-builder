import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import RootLayout from '@/components/Layoutes/RootLayout'
import Banner from '@/components/Ui/Banner'
import FeaturedProducts from '@/components/Ui/FeaturedProducts'
import FeaturedCategories from '@/components/Ui/FeaturedCategories'
import CatagoryProduct from '@/components/Ui/catagoryProduct'


export default function Home({ products }) {

  return (
    <>
      <Head>
        <title>Pc Builder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Banner />
        <FeaturedProducts products={products} />

        <FeaturedCategories />
      </>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export const getStaticProps = async () => {

  const result = await fetch('http://localhost:5000/parts')
  const data = await result.json()

  return {
    props: {
      products: data,
    },
    revalidate: 30
  }
}

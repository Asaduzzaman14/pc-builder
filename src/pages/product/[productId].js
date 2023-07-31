import RootLayout from '@/components/Layoutes/RootLayout';
import { Button, Card, Image } from 'antd';
import Link from 'next/link';
import React from 'react';

const ProductDetails = ({ product }) => {

    return (
        <div>
            <h2>This is product details: {product?.name} </h2>
            <div className='flex justify-center mt-10'>
                <div
                    key={product._id}
                    className='lg:flex p-3 items-center  gap-2 bg-slate-900'
                // style={{ width: 550, padding: '0px', margin: "0" }}
                >
                    <Image alt='aa' width={300} height={200} src={product?.img} />
                    <div className='text-base mt-5 lg:mt-0 font-medium text-gray-300'>
                        <p className='text-2xl'>Name: {product?.name}</p>
                        <p>Category:  {product?.name}</p>
                        <p>Price: {product?.price}</p>
                        <p>Status: this is In Stock</p>
                        <p>Rating: this is Rating</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;


ProductDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};





export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/parts')
    const products = await res.json()

    const paths = products?.map((product) => ({
        params: { productId: product.id }
    }))
    return { paths, fallback: false }
}



export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/parts/${params.productId}`)

    const data = await res.json()
    return {
        props: {
            product: data
        }
    }
}


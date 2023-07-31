import { Button, Card, Image } from 'antd';
import Link from 'next/link';
import React from 'react';

const CatagoryProduct = ({ products }) => {
    return (
        <div>

            <div className='mt-5'>
                <div className='grid justify-items-center md:grid-cols-2  lg:grid-cols-3 gap-5'>
                    {
                        products?.map((product) => (
                            <Card
                                key={product.id}
                                hoverable
                                className='p-0 bg-slate-900'
                                style={{ width: 250, padding: '0px', margin: "0" }}

                            >
                                <Image alt='aa' width={200} height={250} src={product?.img} />
                                <div className='text-base font-medium text-gray-300'>
                                    <p>Name: {product?.name}</p>
                                    <p>Category: {product.catagory}</p>
                                    <p>Price: {product?.price}</p>
                                    <p>Status: this is In Stock</p>
                                    <p>Rating: this is Rating</p>
                                </div>
                                <div className='pt-3 text-center text-white'>
                                    <Link href={`/product/${product.id}`} >
                                        <Button className='text-white'>DETAILS</Button>
                                    </Link>
                                </div>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CatagoryProduct;
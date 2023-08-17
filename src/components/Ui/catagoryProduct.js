import { addToCart } from '@/redux/features/build';
import { Button, Card, Image } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';

const CatagoryProduct = ({ products }) => {
    const router = useRouter();

    const dispatch = useDispatch()

    if (!products) {
        return <h2>Loading...</h2>
    }



    const handleAddProduct = (product) => {
        dispatch(addToCart(product));
        router.push('/build-pc');
    };


    return (
        <div>

            <div className='mt-5'>
                <div className='grid justify-items-center md:grid-cols-2  gap-5'>
                    {
                        products?.map((product) => (
                            <Card
                                key={product.id}
                                className='p-0 border-0 hover:border  bg-slate-900'
                                style={{ width: 550, padding: '0px', margin: "0" }}
                            >
                                <div className='flex justify-between gap-5 items-center'>
                                    <div className='flex gap-5'>
                                        <Image alt='aa' width={120} height={120} src={product?.img} />
                                        <div className='text-base font-medium text-gray-300'>
                                            <p>Name: {product?.name}</p>
                                            <p>Category: {product.catagory}</p>
                                            <p>Price: {product?.price}</p>
                                            <p>Status: this is In Stock</p>
                                            <p>Rating: this is Rating</p>
                                        </div>
                                    </div>
                                    <div className='pt-3 text-center text-white'>
                                        <div onClick={() => handleAddProduct(product)}>
                                            <Button className='text-white'>Add</Button>
                                        </div>
                                    </div>
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
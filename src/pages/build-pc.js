import RootLayout from '@/components/Layoutes/RootLayout';
import { Button, Card, Image } from 'antd';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const buildPc = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { products, catagory } = useSelector((state) => state.cart)

    console.log(products);
    console.log(catagory);



    return (
        <div>
            <h2>BUILD YOUR PC</h2>
            <div className=''>
                <div className='grid gap-5 mt-10'>
                    <div className='border-2 rounded-sm '>
                        <Link href="/build/processor" className='flex justify-between items-center px-2'>
                            <p className=' p-4 rounded-md '>Processor  </p>
                            <Button
                                className='text-white'>Select</Button>
                        </Link>
                    </div>
                    <div className='border-2 rounded-sm '>
                        <Link href="/build/motherboard" className='flex justify-between items-center px-2'>
                            <p className=' p-4 rounded-md '>Motherboard  </p>
                            <Button className='text-white'>Select</Button>
                        </Link>
                    </div>
                    <div className='border-2 rounded-sm '>
                        <Link href="/build/ram" className='flex justify-between items-center px-2'>
                            <p className=' p-4 rounded-md '>RAM  </p>
                            <Button className='text-white'>Select</Button>
                        </Link>
                    </div>
                    <div className='border-2 rounded-sm '>
                        <Link href="/build/powerSupplyUnit" className='flex justify-between items-center px-2'>
                            <p className=' p-4 rounded-md '>Power Supply Unit  </p>
                            <Button className='text-white'>Select</Button>
                        </Link>
                    </div>
                    <div className='border-2 rounded-sm '>
                        <Link href="/build/storageDevice" className='flex justify-between items-center px-2'>
                            <p className=' p-4 rounded-md '>Storage Device  </p>
                            <Button className='text-white'>Select</Button>
                        </Link>
                    </div>
                    <div className='border-2 rounded-sm '>
                        <Link href="/build/monitor" className='flex justify-between items-center px-2'>
                            <p className=' p-4 rounded-md '>Monitor  </p>
                            <Button className='text-white'>Select</Button>
                        </Link>
                    </div>
                    <div className='border-2 rounded-sm '>
                        <Link href="/build/mouse" className='flex justify-between items-center px-2'>
                            <p className=' p-4 rounded-md '>Mouse  </p>
                            <Button className='text-white'>Select</Button>
                        </Link>
                    </div>
                </div>


                <div className='my-5 text-center'>
                    <Button className='text-white'>BUILD</Button>
                    <div className='grid justify-items-center md:grid-cols-2  gap-5'>
                        {
                            products?.map(product => {
                                return <Card
                                    key={product.id}
                                    className='p-0  bg-slate-900'
                                    style={{ width: 350, padding: '0px', margin: "0" }}
                                >
                                    <div className='flex justify-between gap-5 items-center'>
                                        <div className='flex gap-5'>
                                            <Image alt='aa' width={100} height={100} src={product?.img} />
                                            <div className='text-base font-medium text-gray-300'>
                                                <p>Name: {product?.name}</p>
                                                <p>Category: {product.catagory}</p>
                                                {/* <p>Price: {product?.price}</p>
                                        <p>Status: this is In Stock</p>
                                        <p>Rating: this is Rating</p> */}
                                            </div>
                                        </div>

                                    </div>
                                </Card>
                            })
                        }
                    </div>
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

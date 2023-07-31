import RootLayout from '@/components/Layoutes/RootLayout';
import CatagoryProduct from '@/components/Ui/catagoryProduct';
import React from 'react';

const StorageDevice = ({ products }) => {
    const storageDevice = products?.filter(product => product.catagory == 'storage device');

    return (
        <div>
            <h2>Storage Device</h2>
            <>
                <CatagoryProduct products={storageDevice} />
            </>
        </div>
    );
};

export default StorageDevice;


StorageDevice.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};


export const getStaticProps = async () => {

    const result = await fetch('http://localhost:5000/featuredProduct')
    const data = await result.json()

    return {
        props: {
            products: data,
        },
        revalidate: 30
    }
}

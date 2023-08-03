import RootLayout from '@/components/Layoutes/RootLayout';
import CatagoryProduct from '@/components/Ui/catagoryProduct';
import React from 'react';

const Motherboard = ({ products }) => {

    const motherboard = products?.filter(product => product.catagory === 'motherboard');

    return (
        <div>
            <h2>Motherboard</h2>
            <>
                <CatagoryProduct products={motherboard} />
            </>
        </div>
    );
};

export default Motherboard;

Motherboard.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {

    const result = await fetch('http://localhost:5000/featuredProduct')
    const data = await result.json()

    return {
        props: {
            products: data,
        },
    }
}

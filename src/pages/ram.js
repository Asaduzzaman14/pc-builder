import RootLayout from '@/components/Layoutes/RootLayout';
import CatagoryProduct from '@/components/Ui/catagoryProduct';
import React from 'react';

const Ram = ({ products }) => {
    const ram = products?.filter(product => product.catagory === 'ram');

    return (
        <div>
            <h2>Ram</h2>
            <>
                <CatagoryProduct products={ram} />
            </>
        </div>
    );
};

export default Ram;


Ram.getLayout = function getLayout(page) {
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


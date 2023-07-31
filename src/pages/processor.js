import RootLayout from '@/components/Layoutes/RootLayout';
import CatagoryProduct from '@/components/Ui/catagoryProduct';
import React from 'react';

const Processor = ({ products }) => {

    const processor = products?.filter(product => product.catagory === 'processor');

    return (
        <div>
            <h2>Processor</h2>
            <>
                <CatagoryProduct products={processor} />
            </>
        </div>
    );
};

export default Processor;


Processor.getLayout = function getLayout(page) {
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

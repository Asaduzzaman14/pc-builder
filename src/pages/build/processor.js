import RootLayout from '@/components/Layoutes/RootLayout';
import CatagoryProduct from '@/components/Ui/catagoryProduct';
import React from 'react';

const Processor = ({ products }) => {

    if (!products) {
        return <h2>Loading...</h2>
    }


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


export const getServerSideProps = async () => {

    const result = await fetch('http://localhost:5000/featuredProduct')
    const data = await result?.json()
    console.log(data);
    return {
        props: {
            products: data,
        },
    }
}

import RootLayout from '@/components/Layoutes/RootLayout';
import CatagoryProduct from '@/components/Ui/catagoryProduct';
import React from 'react';

const PowerSupplyUnit = ({ products }) => {
    const powerSupply = products?.filter(product => product.catagory == 'Power supply unit');


    return (
        <div>
            <h2>Power Supply Unit</h2>
            <>
                <CatagoryProduct products={powerSupply} />
            </>
        </div>
    );
};

export default PowerSupplyUnit;


PowerSupplyUnit.getLayout = function getLayout(page) {
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

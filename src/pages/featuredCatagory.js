import RootLayout from '@/components/Layoutes/RootLayout';
import React from 'react';

const FeaturedCatagory = () => {
    return (
        <div>
            <h2>Featured Catagory Page</h2>
        </div>
    );
};

export default FeaturedCatagory;

FeaturedCatagory.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

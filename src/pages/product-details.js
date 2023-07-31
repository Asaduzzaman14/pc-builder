import RootLayout from '@/components/Layoutes/RootLayout';
import React from 'react';

const details = () => {
    return (
        <div>
            <h2>details</h2>
        </div>
    );
};


export default details;

details.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

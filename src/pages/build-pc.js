import RootLayout from '@/components/Layoutes/RootLayout';
import React from 'react';

const buildPc = () => {
    return (
        <div>
            <h2>BUILD YOUR PC</h2>
        </div>
    );
};

export default buildPc;


buildPc.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

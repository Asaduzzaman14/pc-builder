import RootLayout from '@/components/Layoutes/RootLayout';
import React from 'react';

const NotFound = () => {
    return (
        <div className='mt-10'>
            <h2>404</h2>
            <h2>Page Not Found</h2>
        </div>
    );
};

export default NotFound;

NotFound.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

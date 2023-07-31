import RootLayout from '@/components/Layoutes/RootLayout';
import React from 'react';

const About = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <h2>About</h2>
        </div>
    );
};

export default About;

About.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

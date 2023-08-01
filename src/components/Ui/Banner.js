import React from 'react';
import banner from '@/assets/pc-builder.jpg'
import Image from 'next/image';

const Banner = () => {
    return (
        <div>
            <Image src={banner} height={500} width={'100%'} alt="" />
        </div>
    );
};

export default Banner;
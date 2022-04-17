import React from 'react';
import GuideInfo from '../GuideInfo/GuideInfo';
import Packages from '../Packages/Packages';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <GuideInfo></GuideInfo>
            <Packages></Packages>
        </div>
    );
};

export default Home;
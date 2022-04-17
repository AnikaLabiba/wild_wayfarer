import React from 'react';
import GuideInfo from '../GuideInfo/GuideInfo';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <GuideInfo></GuideInfo>
            <Services></Services>
        </div>
    );
};

export default Home;
import React from 'react';
import './GuideInfo.css'
import fadeInDown from 'react-animations/lib/fade-in'
import Radium, { StyleRoot } from 'radium';
import { render } from '@testing-library/react';

const styles = {
    fadeInDown: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }
}

const GuideInfo = () => {
    render(
        <StyleRoot>
            <div style={styles.fadeInDown} className='test text-center container my-5 guide-info'>
                <h4>Welcome to Wild Wayfarer</h4>
                <h5 className='info my-3'>If you are looking for a single guide to have with you while traveling to Bangladesh, then you are at the right place. I have years of experience in Traveling and Tourists Guide. I can be your personal photographer, your historical guide, museum guide, nature and city guide.Once you have arrived here, please take a look to the packages where I have added the services that I can provide you.</h5>
            </div>
        </StyleRoot>
    );
};

export default GuideInfo;
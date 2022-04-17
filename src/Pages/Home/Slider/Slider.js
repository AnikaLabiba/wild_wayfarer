import React from 'react';
import { Carousel } from 'react-bootstrap';
import picture1 from '../../../Images/Carousel/carousel1.png'
import picture2 from '../../../Images/Carousel/carousel2.png'
import picture3 from '../../../Images/Carousel/carousel3.png'
import picture4 from '../../../Images/Carousel/carousel4.png'
import picture5 from '../../../Images/Carousel/carousel5.png'

const Slider = () => {
    return (
        <div className='mb-4'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={picture1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Cox's Bazar</h3>
                        <p>Do not follow where the path may lead. Go instead where there is no path and leave a trail” – Ralph Waldo Emerson</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={picture2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Saint Martin</h3>
                        <p>Do not follow where the path may lead. Go instead where there is no path and leave a trail” – Ralph Waldo Emerson</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={picture3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Tanguar Hawor</h3>
                        <p>Do not follow where the path may lead. Go instead where there is no path and leave a trail” – Ralph Waldo Emerson</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={picture4}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Sajek</h3>
                        <p>Do not follow where the path may lead. Go instead where there is no path and leave a trail” – Ralph Waldo Emerson</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={picture5}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Bandarban</h3>
                        <p>Do not follow where the path may lead. Go instead where there is no path and leave a trail” – Ralph Waldo Emerson</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default Slider;
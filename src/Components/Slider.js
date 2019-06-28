import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image_1 from '../assets/images/slideshow_1.jpg';
import image_2 from '../assets/images/slideshow_2.jpg';
import image_3 from '../assets/images/slideshow_3.jpg';

class Slider extends Component {

    render() {
        return (
            <div className="col-sm-10 col-md-10 col-lg-10 m-auto p-0" align="center" style={{ boxShadow: '0px 2px 10px black' }}>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image_1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image_2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image_3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Slider;

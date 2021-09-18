import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import CarouselImg1 from "../../Images/Carousel images/carousel-1.jpg";
import CarouselImg2 from "../../Images/Carousel images/carousel-2.jpg";
import CarouselImg3 from "../../Images/Carousel images/carousel-3.jpg";

function ContentCarousel() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CarouselImg1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CarouselImg2}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CarouselImg3}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default ContentCarousel;

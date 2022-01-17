import React from "react";
import {Carousel} from "react-bootstrap";
import UuidGenerator from "../utils/UuidGenerator";
import './MainCarousel.scss'
import Button from "react-bootstrap/Button";
import {Wave} from "react-animated-text";

const MainCarousel = ({slides}) => (
    <Carousel variant="dark" className="carousel pt-lg-4 pt-0" fade>
        {slides.map(slide => (
            <Carousel.Item key={UuidGenerator.uuid4()} as="div" className="carousel-image-container">
                <img
                    className="carousel-image"
                    src={slide.img}
                    alt={slide.label}
                />
                <Carousel.Caption>
                    <h2 className="xl-text1">
                        <Wave text={slide.label} effect="pop" effectChange={2.2} iterations={1}/>
                    </h2>

                    <span className="m-text1">
                        {slide.description}
                    </span>

                    <div className="pt-2 pb-3">
                        <Button variant="light">Shop Now</Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
)

export default MainCarousel
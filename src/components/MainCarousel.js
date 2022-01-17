import React from "react";
import {Carousel} from "react-bootstrap";
import UuidGenerator from "../utils/UuidGenerator";
import './Carousel.scss'

const MainCarousel = ({slides}) => (
    <Carousel variant="dark" className="carousel pt-lg-4 pt-0">
        {slides.map(slide => (
            <Carousel.Item key={UuidGenerator.uuid4()} as="div" className="carousel-image-container">
                <img
                    className="carousel-image"
                    src={slide.img}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{slide.label}</h3>
                    <p>{slide.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
)

export default MainCarousel
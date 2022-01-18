import React from "react";
import {Carousel, Image} from "react-bootstrap";
import UuidGenerator from "../../../utils/UuidGenerator";
import './MainCarousel.scss'
import {Wave} from "react-animated-text";
import LightButton from "../../../components/LightButton";

const MainCarousel = ({slides}) => (
    <Carousel variant="dark" className="carousel pt-0" fade as="section">
        {slides.map(slide => (
            <Carousel.Item key={UuidGenerator.uuid4()} as="div" className="carousel-image-container">
                <Image
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

                    <div className="d-flex justify-content-center pt-3 pb-3">
                        <LightButton text="Shop Now" type="submit"/>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
)

export default MainCarousel
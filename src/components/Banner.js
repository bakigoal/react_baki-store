import banner1 from "../assets/images/banner-01.jpg";
import banner2 from "../assets/images/banner-01.jpg";
import banner3 from "../assets/images/banner-03.jpg";
import banner5 from "../assets/images/banner-05.jpg";
import banner4 from "../assets/images/banner-04.jpg";
import {Col, Row} from "react-bootstrap";
import ImageBlock from "./ImageBlock";
import Container from "react-bootstrap/Container";

const Banner = () => (
    <Container className="pt-40 pb-5" fluid>
        <Row>
            <Col sm={10} md={8} lg={4}>
                <ImageBlock img={banner1} label="Dresses"/>
                <ImageBlock img={banner3} label="Sunglasses"/>
            </Col>
            <Col sm={10} md={8} lg={4}>
                <ImageBlock img={banner5} label="Watches"/>
                <ImageBlock img={banner2} label="Footwear"/>
            </Col>
            <Col sm={10} md={8} lg={4}>
                <ImageBlock img={banner4} label="Bags"/>
                <ImageBlock img={banner3} label="Sunglasses"/>
            </Col>
        </Row>
    </Container>
)

export default Banner
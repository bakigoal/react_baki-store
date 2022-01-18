import banner1 from "../../../assets/images/banner-01.jpg";
import banner2 from "../../../assets/images/banner-02.jpg";
import banner3 from "../../../assets/images/banner-03.jpg";
import banner4 from "../../../assets/images/banner-04.jpg";
import banner5 from "../../../assets/images/banner-05.jpg";
import banner6 from "../../../assets/images/banner-06.jpg";
import {Col, Row} from "react-bootstrap";
import ImageBlock from "../../../components/ImageBlock";
import Container from "react-bootstrap/Container";

const Banner = () => (
    <Container className="banner pt-40 pb-5" as="section">
        <Row className="justify-content-center">
            <Col sm={10} md={8} lg={4}>
                <ImageBlock img={banner1} label="Dresses"/>
                <ImageBlock img={banner2} label="Sunglasses"/>
            </Col>
            <Col sm={10} md={8} lg={4}>
                <ImageBlock img={banner3} label="Watches"/>
                <ImageBlock img={banner4} label="Footwear"/>
            </Col>
            <Col sm={10} md={8} lg={4}>
                <ImageBlock img={banner5} label="Bags"/>
                <ImageBlock img={banner6} label="Accessories"/>
            </Col>
        </Row>
    </Container>
)

export default Banner
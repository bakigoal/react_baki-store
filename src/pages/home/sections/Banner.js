import banner1 from "../../../assets/images/banner-01.jpg";
import banner2 from "../../../assets/images/banner-02.jpg";
import banner3 from "../../../assets/images/banner-03.jpg";
import banner4 from "../../../assets/images/banner-04.jpg";
import banner5 from "../../../assets/images/banner-05.jpg";
import banner6 from "../../../assets/images/banner-06.jpg";
import {Col, Row} from "react-bootstrap";
import BannerImageBlock from "../../../components/BannerImageBlock";
import Container from "react-bootstrap/Container";

const Banner = () => (
    <Container className="banner pt-40 pb-5" as="section">
        <Row className="justify-content-center">
            <Col sm={10} md={8} lg={4}>
                <BannerImageBlock img={banner1} label="Dresses"/>
                <BannerImageBlock img={banner2} label="Sunglasses"/>
            </Col>
            <Col sm={10} md={8} lg={4}>
                <BannerImageBlock img={banner3} label="Watches"/>
                <BannerImageBlock img={banner4} label="Footwear"/>
            </Col>
            <Col sm={10} md={8} lg={4}>
                <BannerImageBlock img={banner5} label="Bags"/>
                <BannerImageBlock img={banner6} label="Accessories"/>
            </Col>
        </Row>
    </Container>
)

export default Banner
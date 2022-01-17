import banner1 from "../assets/images/banner-01.jpg";
import banner2 from "../assets/images/banner-01.jpg";
import banner3 from "../assets/images/banner-03.jpg";
import banner5 from "../assets/images/banner-05.jpg";
import banner4 from "../assets/images/banner-04.jpg";
import {Row} from "react-bootstrap";
import ImageBlock from "./ImageBlock";

const Banner = () => (
    <section className="banner pt-5 pb-5">
        <Row>
            <div className="col-sm-10 col-md-8 col-lg-4 ms-auto me-auto">
                <ImageBlock img={banner1} label="Dresses"/>
                <ImageBlock img={banner3} label="Sunglasses"/>
            </div>
            <div className="col-sm-10 col-md-8 col-lg-4 ms-auto me-auto">
                <ImageBlock img={banner5} label="Watches"/>
                <ImageBlock img={banner2} label="Footwear"/>
            </div>
            <div className="col-sm-10 col-md-8 col-lg-4 ms-auto me-auto">
                <ImageBlock img={banner4} label="Bags"/>
                <ImageBlock img={banner3} label="Sunglasses"/>
            </div>
        </Row>
    </section>
)

export default Banner
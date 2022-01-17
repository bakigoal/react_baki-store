import DarkButton from "./DarkButton";
import bg from '../assets/images/icons/bg-01.jpg'
import {Card, Image} from "react-bootstrap";

const SignUpBannerBlock = () => (
    <Card className="text-white mb-3 hov-img-zoom">
        <Card.Img src={bg} alt="Bg image"/>
        <Card.ImgOverlay>
            <div className="h-100 d-flex flex-column align-items-center">
                <h4 className="m-text4 text-center w-size3 pb-3">
                    Sign up & get 20% off
                </h4>

                <p className="text-center w-size4">
                    Be the frist to know about the latest fashion news and get exclu-sive offers
                </p>

                <div className="w-size2 pt-3">
                    <DarkButton text="Sign up" type="submit"/>
                </div>
            </div>
        </Card.ImgOverlay>
    </Card>
)

export default SignUpBannerBlock
import './ImageBlock.scss'
import {Card} from "react-bootstrap";
import LightButton from "./LightButton";

const ImageBlock = ({img, label}) => (
    <Card className="text-white mb-3 hov-img-zoom">
        <Card.Img src={img} alt={label}/>
        <Card.ImgOverlay>
            <div className="h-100 d-flex flex-column-reverse align-items-center">
                <LightButton text={label} type="submit"/>
            </div>
        </Card.ImgOverlay>
    </Card>
)

export default ImageBlock
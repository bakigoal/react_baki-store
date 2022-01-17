import Button from "react-bootstrap/Button";
import './ImageBlock.scss'

const ImageBlock = ({img, label}) => (
    <div className="block1 hov-img-zoom position-relative mb-3">
        <img src={img} alt={label}/>
        <div className="block1-wrap-btn button-container-size">
            <Button variant="light" className="w-100">{label}</Button>
        </div>
    </div>
)

export default ImageBlock
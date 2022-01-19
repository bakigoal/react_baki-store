import {Card} from "react-bootstrap";
import React from "react";

const PageTitleBanner = ({title, img}) => (
    <Card className="text-white mb-4">
        <Card.Img src={img} alt={title}/>
        <Card.ImgOverlay>
            <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                <Card.Title className="l-text2">{title}</Card.Title>
            </div>
        </Card.ImgOverlay>
    </Card>
)

export default PageTitleBanner
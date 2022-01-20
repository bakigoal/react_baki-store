import UuidGenerator from "../../../utils/UuidGenerator";
import React from "react";
import {Image} from "react-bootstrap";

const FooterPayments = ({links}) => (
    <div className="ps-2 pe-2 text-center">
        {links.map(link => (
            <a href={link.url} className="pe-1" key={UuidGenerator.uuid4()}>
                <Image className="h-size2" src={link.icon} alt="IMG-PAYPAL"/>
            </a>
        ))}
    </div>
)

export default FooterPayments
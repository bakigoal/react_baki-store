import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

const FaIconLink = ({link}) => (
    <a href={link.url} className="pe-3 fs-5 social-icon-link">
        <FontAwesomeIcon icon={link.icon}/>
    </a>
)

export default FaIconLink
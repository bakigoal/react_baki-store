import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {NavLink} from "react-bootstrap";

const FaIconLink = ({link}) => (
    <NavLink href={link.url} className="pe-3 fs-5 social-icon-link">
        <FontAwesomeIcon icon={link.icon}/>
    </NavLink>
)

export default FaIconLink
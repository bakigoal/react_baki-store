import './FaIconButton.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "react-bootstrap/Button";

const FaIconButton = ({icon, onclick, size}) => (
    <Button onClick={() => onclick()} variant="link" size="lg" className="fa-icon-button p-0">
        <FontAwesomeIcon icon={icon} size={size}/>
    </Button>
)

export default FaIconButton
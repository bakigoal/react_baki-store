import './FaIconButton.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "react-bootstrap/Button";

const FaIconButton = ({icon, onclick}) => (
    <Button onClick={() => onclick()} variant="link" size="lg" className="fa-icon-button">
        <FontAwesomeIcon icon={icon} size="2x"/>
    </Button>
)

export default FaIconButton
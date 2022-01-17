import Button from "react-bootstrap/Button";
import React from "react";

const LightButton = ({text, type}) => (
    <div className="button-container-size">
        <Button variant="light" type={type} className="text-uppercase w-100">{text}</Button>
    </div>
)

export default LightButton
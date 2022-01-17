import Button from "react-bootstrap/Button";
import React from "react";

const DarkButton = ({text, type}) => (
    <div className="button-container-size">
        <Button variant="dark" type={type} className="text-uppercase w-100 border-radius-25">{text}</Button>
    </div>
)

export default DarkButton
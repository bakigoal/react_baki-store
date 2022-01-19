import Button from "react-bootstrap/Button";
import React from "react";

const CurlyButton = ({text, type, onClick, variant}) => (
    <div className="button-container-size">
        <Button variant={variant} type={type} className="text-uppercase w-100 border-radius-23" onClick={onClick}>{text}</Button>
    </div>
)

export default CurlyButton
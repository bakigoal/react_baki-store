import Button from 'react-bootstrap/Button';
import React from "react";

const InfoButton = (props) => {
    return (
        <Button variant="info" onClick={props.onClick}>{props.children}</Button>
    )
}

export default InfoButton
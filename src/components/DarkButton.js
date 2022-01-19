import React from "react";
import CurlyButton from "./CurlyButton";

const DarkButton = ({text, type, onClick}) => (
    <CurlyButton onClick={onClick} text={text} type={type} variant="dark"/>
)

export default DarkButton
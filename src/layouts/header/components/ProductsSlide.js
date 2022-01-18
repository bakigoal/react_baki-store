import Container from "react-bootstrap/Container";
import React from "react";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import FaIconButton from "../../../components/FaIconButton";

const ProductsSlide = ({products}) => (
    <Container>
        <FaIconButton icon={faAngleLeft} onclick={onLeftClick}/>
        <FaIconButton icon={faAngleRight} onclick={onRightClick}/>

    </Container>
)

const onLeftClick = () => {
    console.log("left clicked...")
}

const onRightClick = () => {
    console.log("right clicked...")
}

export default ProductsSlide
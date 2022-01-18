import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Main from "./layouts/main/Main";
import itemCart1 from "./assets/images/item-cart-01.jpg";
import itemCart2 from "./assets/images/item-cart-02.jpg";
import itemCart3 from "./assets/images/item-cart-03.jpg";

const App = () => (
    <Router>
        <div className="d-flex flex-column min-vh-100">
            <Header cartItems={cartItems}/>
            <div className="flex-grow-1">
                <Main/>
            </div>
            <Footer/>
        </div>
    </Router>
)

export default App

const cartItems = [
    {
        img: itemCart1,
        title: 'White Shirt With Pleat Detail Back',
        count: 1,
        price: 19.00
    },
    {
        img: itemCart2,
        title: 'Converse All Star Hi Black Canvas',
        count: 1,
        price: 39.00
    },
    {
        img: itemCart3,
        title: 'Nixon Porter Leather Watch In Tan',
        count: 1,
        price: 17.00
    }
]
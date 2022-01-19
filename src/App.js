import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Main from "./layouts/main/Main";
import {CART_KEY, useLocalStorageState} from "./utils/LocalStorageUtil";

const App = () => {
    const [cartItems, setCartItems] = useLocalStorageState(CART_KEY, [])

    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Header cartItems={cartItems}/>
                <div className="flex-grow-1">
                    <Main setCartItems={setCartItems}/>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App

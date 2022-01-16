import paypal from "../../assets/images/icons/paypal.png";
import visa from "../../assets/images/icons/visa.png";
import mastercard from "../../assets/images/icons/mastercard.png";
import express from "../../assets/images/icons/express.png";
import discover from "../../assets/images/icons/discover.png";
import React from "react";


const FooterCopyright = () => (
    <div className="ps-2 pe-2 text-center">
        <a href="#" className="pe-1">
            <img className="h-size2" src={paypal} alt="IMG-PAYPAL"/>
        </a>

        <a href="#" className="pe-1">
            <img className="h-size2" src={visa} alt="IMG-VISA"/>
        </a>

        <a href="#" className="pe-1">
            <img className="h-size2" src={mastercard} alt="IMG-MASTERCARD"/>
        </a>

        <a href="#" className="pe-1">
            <img className="h-size2" src={express} alt="IMG-EXPRESS"/>
        </a>

        <a href="#" className="pe-1">
            <img className="h-size2" src={discover} alt="IMG-DISCOVER"/>
        </a>

        <div className="t-center s-text8 pt-3">
            Copyright © 2022 All rights reserved. | This template is made with <i className="fa fa-heart-o"
                                                                                  aria-hidden="true"/> by <a
            href="https://bakigoal.com" target="_blank">Bakigoal</a>
        </div>
    </div>
)

export default FooterCopyright
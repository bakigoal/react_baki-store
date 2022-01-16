import React from "react";
import './Footer.scss'
import paypal from '../assets/images/icons/paypal.png'
import visa from '../assets/images/icons/visa.png'
import mastercard from '../assets/images/icons/mastercard.png'
import express from '../assets/images/icons/express.png'
import discover from '../assets/images/icons/discover.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagram, faPinterestP, faSnapchatGhost, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {Row} from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="p-5 border-top">
            <Row className="pb-5">
                <div className="col-4">
                    <h4 className="s-text12 pb-3">
                        GET IN TOUCH
                    </h4>

                    <div>
                        <p className="s-text7 w-size27">
                            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call
                            us on (+1) 96 716 6879
                        </p>

                        <div className="d-flex pt-3">
                            <a href="#" className="pe-3 fs-5 brand-link">
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </a>
                            <a href="#" className="pe-3 fs-5 brand-link">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                            <a href="#" className="pe-3 fs-5 brand-link">
                                <FontAwesomeIcon icon={faPinterestP}/>
                            </a>
                            <a href="#" className="pe-3 fs-5 brand-link">
                                <FontAwesomeIcon icon={faSnapchatGhost}/>
                            </a>
                            <a href="#" className="pe-3 fs-5 brand-link">
                                <FontAwesomeIcon icon={faYoutube}/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-2">
                    <h4 className="s-text12 p-b-30">
                        Categories
                    </h4>

                    <ul>
                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Men
                            </a>
                        </li>

                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Women
                            </a>
                        </li>

                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Dresses
                            </a>
                        </li>

                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Sunglasses
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-2">
                    <h4 className="s-text12 p-b-30">
                        Links
                    </h4>

                    <ul>
                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Search
                            </a>
                        </li>

                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                About Us
                            </a>
                        </li>

                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Contact Us
                            </a>
                        </li>

                        <li className="p-b-9">
                            <a href="#" className="s-text7">
                                Returns
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-4">
                    <h4 className="s-text12 p-b-30">
                        Newsletter
                    </h4>

                    <form>
                        <div className="effect1 w-size9">
                            <input className="s-text7 bg6 w-full p-b-5" type="text" name="email"
                                   placeholder="email@example.com"/>
                            <span className="effect1-line"/>
                        </div>

                        <div className="w-size2 p-t-20">
                            <button className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
                                Subscribe
                            </button>
                        </div>

                    </form>
                </div>
            </Row>

            <div className="t-center p-l-15 p-r-15">
                <a href="#">
                    <img className="h-size2" src={paypal} alt="IMG-PAYPAL"/>
                </a>

                <a href="#">
                    <img className="h-size2" src={visa} alt="IMG-VISA"/>
                </a>

                <a href="#">
                    <img className="h-size2" src={mastercard} alt="IMG-MASTERCARD"/>
                </a>

                <a href="#">
                    <img className="h-size2" src={express} alt="IMG-EXPRESS"/>
                </a>

                <a href="#">
                    <img className="h-size2" src={discover} alt="IMG-DISCOVER"/>
                </a>

                <div className="t-center s-text8 p-t-20">
                    Copyright © 2018 All rights reserved. | This template is made with <i className="fa fa-heart-o"
                                                                                          aria-hidden="true"/> by <a
                    href="https://colorlib.com" target="_blank">Colorlib</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
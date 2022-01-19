import React from "react";
import './Footer.scss'
import {Col, Row} from "react-bootstrap";
import FooterSocials from "./sections/FooterSocials";
import FooterEmail from "./sections/FooterEmail";
import FooterCopyright from "./sections/FooterCopyright";
import FooterLinkList from "./sections/FooterLinkList";
import {faFacebookF, faInstagram, faPinterestP, faSnapchatGhost, faYoutube} from "@fortawesome/free-brands-svg-icons";
import paypal from "../../assets/images/icons/paypal.png";
import visa from "../../assets/images/icons/visa.png";
import mastercard from "../../assets/images/icons/mastercard.png";
import express from "../../assets/images/icons/express.png";
import discover from "../../assets/images/icons/discover.png";
import FooterPayments from "./sections/FooterPayments";

const socialLinks = [
    {icon: faFacebookF, url: "#"},
    {icon: faInstagram, url: "#"},
    {icon: faPinterestP, url: "#"},
    {icon: faSnapchatGhost, url: "#"},
    {icon: faYoutube, url: "#"},
]

const categories = [
    {title: "Men", url: "#"},
    {title: "Women", url: "#"},
    {title: "Dresses", url: "#"},
    {title: "Sunglasses", url: "#"},
]

const links = [
    {title: "Search", url: "#"},
    {title: "About Us", url: "#"},
    {title: "Contact Us", url: "#"},
    {title: "Returns", url: "#"},
]

const helpLinks = [
    {title: "Track Order", url: "#"},
    {title: "Returns", url: "#"},
    {title: "Shipping", url: "#"},
    {title: "FAQs", url: "#"},
]

const paymentLinks = [
    {icon: paypal, url: "#"},
    {icon: visa, url: "#"},
    {icon: mastercard, url: "#"},
    {icon: express, url: "#"},
    {icon: discover, url: "#"},
]

const Footer = () => {
    return (
        <footer className="p-lg-5 p-3 pt-5 border-top footer bg-light">
            <Row className="pb-5">
                <Col lg={4}>
                    <FooterSocials links={socialLinks}/>
                </Col>

                <Col lg={5}>
                    <Row>
                        <Col>
                            <FooterLinkList title="Categories" links={categories}/>
                        </Col>

                        <Col>
                            <FooterLinkList title="Links" links={links}/>
                        </Col>

                        <Col>
                            <FooterLinkList title="Help" links={helpLinks}/>
                        </Col>
                    </Row>
                </Col>

                <Col lg={3}>
                    <FooterEmail/>
                </Col>
            </Row>

            <FooterPayments links={paymentLinks}/>
            <FooterCopyright/>

        </footer>
    )
}

export default Footer
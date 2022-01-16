import React from "react";
import './Footer.scss'
import {Row} from "react-bootstrap";
import FooterSocials from "./components/FooterSocials";
import FooterEmail from "./components/FooterEmail";
import FooterCopyright from "./components/FooterCopyright";
import FooterLinkList from "./components/FooterLinkList";
import {faFacebookF, faInstagram, faPinterestP, faSnapchatGhost, faYoutube} from "@fortawesome/free-brands-svg-icons";
import paypal from "../../assets/images/icons/paypal.png";
import visa from "../../assets/images/icons/visa.png";
import mastercard from "../../assets/images/icons/mastercard.png";
import express from "../../assets/images/icons/express.png";
import discover from "../../assets/images/icons/discover.png";
import FooterPayments from "./components/FooterPayments";

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
        <footer className="p-5 border-top footer">
            <Row className="pb-5">
                <div className="col-xl-4 pt-3">
                    <FooterSocials links={socialLinks}/>
                </div>

                <div className="col-xl-5">
                    <Row>
                        <div className="col-sm-4 pt-3">
                            <FooterLinkList title="Categories" links={categories}/>
                        </div>

                        <div className="col-sm-4 pt-3">
                            <FooterLinkList title="Links" links={links}/>
                        </div>

                        <div className="col-sm-4 pt-3">
                            <FooterLinkList title="Links" links={helpLinks}/>
                        </div>
                    </Row>
                </div>

                <div className="col-xl-3 pt-3">
                    <FooterEmail/>
                </div>
            </Row>

            <FooterPayments links={paymentLinks}/>
            <FooterCopyright/>

        </footer>
    )
}

export default Footer
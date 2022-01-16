import React from "react";
import './Footer.scss'
import {Row} from "react-bootstrap";
import FooterSocials from "./FooterSocials";
import FooterEmail from "./FooterEmail";
import FooterCopyright from "./FooterCopyright";
import FooterLinkList from "./FooterLinkList";

const categories = [
    {id: 1, title: "Men", url: "#"},
    {id: 2, title: "Women", url: "#"},
    {id: 3, title: "Dresses", url: "#"},
    {id: 4, title: "Sunglasses", url: "#"},
]

const links = [
    {id: 1, title: "Search", url: "#"},
    {id: 2, title: "About Us", url: "#"},
    {id: 3, title: "Contact Us", url: "#"},
    {id: 4, title: "Returns", url: "#"},
]

const helpLinks = [
    {id: 1, title: "Track Order", url: "#"},
    {id: 2, title: "Returns", url: "#"},
    {id: 3, title: "Shipping", url: "#"},
    {id: 4, title: "FAQs", url: "#"},
]

const Footer = () => {
    return (
        <footer className="p-5 border-top footer">
            <Row className="pb-5">
                <div className="col-4 pt-3">
                    <FooterSocials/>
                </div>

                <div className="col-5 pt-3">
                    <Row>
                        <div className="col-4">
                            <FooterLinkList title="Categories" links={categories}/>
                        </div>

                        <div className="col-4">
                            <FooterLinkList title="Links" links={links}/>
                        </div>

                        <div className="col-4">
                            <FooterLinkList title="Links" links={helpLinks}/>
                        </div>
                    </Row>
                </div>

                <div className="col-3 pt-3">
                    <FooterEmail/>
                </div>
            </Row>

            <FooterCopyright/>

        </footer>
    )
}

export default Footer
import React from "react";
import './Footer.scss'
import {Row} from "react-bootstrap";
import FooterContacts from "./FooterContacts";
import FooterCategories from "./FooterCategories";
import FooterLinks from "./FooterLinks";
import FooterHelp from "./FooterHelp";
import FooterEmail from "./FooterEmail";
import FooterAuthor from "./FooterAuthor";


const Footer = () => {
    return (
        <footer className="p-5 border-top footer">
            <Row className="pb-5">
                <div className="col-4 pt-3">
                    <FooterContacts/>
                </div>

                <div className="col-5 pt-3">
                    <Row>
                        <div className="col-4">
                            <FooterCategories/>
                        </div>

                        <div className="col-4">
                            <FooterLinks/>
                        </div>

                        <div className="col-4">
                            <FooterHelp/>
                        </div>
                    </Row>
                </div>

                <div className="col-3 pt-3">
                    <FooterEmail/>
                </div>
            </Row>

            <FooterAuthor/>

        </footer>
    )
}

export default Footer
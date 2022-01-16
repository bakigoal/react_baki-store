import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faPinterestP, faSnapchatGhost, faYoutube} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const FooterSocials = () => (
    <div>
        <h4 className="s-text12 pb-3">
            GET IN TOUCH
        </h4>

        <div>
            <p className="s-text7 w-size27">
                Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call
                us on (+1) 96 716 6879
            </p>

            <div className="d-flex pt-3">
                <a href="#" className="pe-3 fs-5 social-icon-link">
                    <FontAwesomeIcon icon={faFacebookF}/>
                </a>
                <a href="#" className="pe-3 fs-5 social-icon-link">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href="#" className="pe-3 fs-5 social-icon-link">
                    <FontAwesomeIcon icon={faPinterestP}/>
                </a>
                <a href="#" className="pe-3 fs-5 social-icon-link">
                    <FontAwesomeIcon icon={faSnapchatGhost}/>
                </a>
                <a href="#" className="pe-3 fs-5 social-icon-link">
                    <FontAwesomeIcon icon={faYoutube}/>
                </a>
            </div>
        </div>
    </div>
)

export default FooterSocials
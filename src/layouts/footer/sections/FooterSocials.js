import React from "react";
import FaIconLink from "../../../components/FaIconLink";
import UuidGenerator from "../../../utils/UuidGenerator";


const FooterSocials = ({links}) => (
    <div>
        <h4 className="s-text12 pb-3">
            GET IN TOUCH
        </h4>

        <div>
            <p className="s-text7 w-size27">
                Any questions? Let us know in store at
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>

            <div className="d-flex pt-3">
                {links.map(link => (
                    <FaIconLink link={link} key={UuidGenerator.uuid4()}/>
                ))}
            </div>
        </div>
    </div>
)

export default FooterSocials
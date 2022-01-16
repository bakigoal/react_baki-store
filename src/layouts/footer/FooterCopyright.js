import React from "react";
import UuidGenerator from "../../utils/UuidGenerator";

const FooterCopyright = ({donatLinks}) => (
    <div className="ps-2 pe-2 text-center">
        {donatLinks.map(link => (
            <a href={link.url} className="pe-1" key={UuidGenerator.uuid4()}>
                <img className="h-size2" src={link.icon} alt="IMG-PAYPAL"/>
            </a>
        ))}

        <div className="t-center s-text8 pt-3">
            Copyright © 2022 All rights reserved. | This template is made with <i className="fa fa-heart-o"
                                                                                  aria-hidden="true"/> by <a
            href="https://bakigoal.com" target="_blank">Bakigoal</a>
        </div>
    </div>
)

export default FooterCopyright
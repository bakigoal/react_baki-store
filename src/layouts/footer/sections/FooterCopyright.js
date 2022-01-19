import React from "react";
import {NavLink} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";

const FooterCopyright = () => (
    <div className="text-center s-text8 pt-3">
        Copyright © 2022 All rights reserved. |
        This template is made
        with <FontAwesomeIcon icon={faHeart}/> by <NavLink href="https://bakigoal.com" className="d-inline p-0" target="_blank">Bakigoal</NavLink>
    </div>
)

export default FooterCopyright
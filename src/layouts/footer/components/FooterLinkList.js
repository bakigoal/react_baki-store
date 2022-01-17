import React from "react";
import UuidGenerator from "../../../utils/UuidGenerator";
import {NavLink} from "react-bootstrap";

const FooterLinkList = ({title, links}) => {

    return (
        <div>
            <h4 className="s-text12 pb-3">
                {title}
            </h4>

            <ul>
                {links.map(link =>(
                    <li key={UuidGenerator.uuid4()}>
                        <NavLink href={link.url} className="s-text7 ps-0 pt-0">
                            {link.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterLinkList
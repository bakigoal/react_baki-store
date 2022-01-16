import React from "react";

const FooterLinkList = ({title, links}) => {

    return (
        <div>
            <h4 className="s-text12 pb-3">
                {title}
            </h4>

            <ul>
                {links.map(link =>(
                    <li className="pb-2" key={link.id}>
                        <a href={link.url} className="s-text7">
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterLinkList
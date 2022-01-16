import Button from "react-bootstrap/Button";
import React from "react";


const FooterEmail = () => (
    <div>
        <h4 className="s-text12 pb-3">
            Newsletter
        </h4>

        <form>
            <div className="email-form">
                <input className="s-text7 bg6 w-100 pb-2 bg-light" type="text" name="email"
                       placeholder="email@example.com"/>
                <span className="effect1-line"/>
            </div>

            <div className="subscribe-button pt-3">
                <Button variant="dark">Subscribe</Button>
            </div>

        </form>
    </div>
)

export default FooterEmail
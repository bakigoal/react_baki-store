import React from "react";
import Button from "react-bootstrap/Button";


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
                <Button variant="dark" type="submit" className="text-uppercase w-100">Subscribe</Button>
            </div>

        </form>
    </div>
)

export default FooterEmail
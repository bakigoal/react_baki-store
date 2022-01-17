import React from "react";
import Button from "react-bootstrap/Button";
import DarkButton from "../../../components/DarkButton";


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

            <div className="pt-3">
                <DarkButton text="Subscribe" type="submit"/>
            </div>

        </form>
    </div>
)

export default FooterEmail
import React from "react";
import User from "../../../model/User";
import Container from "react-bootstrap/Container";

const Contact = () => {
    return (
        <Container>
            <ul>
                {users()}
            </ul>
        </Container>
    )
}

function users() {
    const list = [
        new User("John", "Doe", 99),
        new User("John", "Snow", 35),
        new User("Peter", "Pan", 77)
    ];
    return list.map(user => {
        return (
            <li key={user.id}>
                <h3>{user.getName()}</h3>
                <p>Age: {user.age}</p>
            </li>
        );
    });
}

export default Contact
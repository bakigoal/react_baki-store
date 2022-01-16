import {useTitle} from "../utils/useTitle";
import React from "react";
import User from "../model/User";

const title = "Users";

const list = [
    new User("John", "Doe", 99),
    new User("John", "Snow", 35),
    new User("Peter", "Pan", 77)
];

const Users = () => {
    useTitle(title)

    return list.map(user => userBlock(user));
}

const userBlock = user => {
    return (
        <div>
            <h3>{user.getName()}</h3>
            <p>Age: {user.age}</p>
        </div>
    );
}

export default Users
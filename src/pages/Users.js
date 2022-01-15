import {useTitle} from "../utils/useTitle";
import React from "react";

const title = "Users";

const Users = () => {
    useTitle(title)
    return <h2>Users</h2>;
}

export default Users
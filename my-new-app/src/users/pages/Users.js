import React from "react";

import UsersList from "../components/UsersList";
const Users = () => {
    const USERS =  [{id: 'u2', name:'Jack', image: 'nothing'}];
    return <UsersList items={USERS}/>;
};

export default Users;


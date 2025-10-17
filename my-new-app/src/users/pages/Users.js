import React from "react";

import UsersList from "../components/UsersList";
const Users = () => {
    const USERS = [{ 
          id: 'u2',
          name: 'Jack',
          image: 'https://www.creativefabrica.com/wp-content/uploads/2023/05/23/Bearded-man-avatar-Generic-male-profile-Graphics-70342414-1.png', 
          places: 3 }];
    return <UsersList items={USERS} />;
};

export default Users;


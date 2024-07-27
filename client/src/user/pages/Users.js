import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "ori1",
      image:
        "https://cdn.pixabay.com/photo/2023/09/19/12/34/dog-8262506_1280.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;

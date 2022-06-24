import React from "react";
import UserCard from "./UserCard";
import "../App.css";

const UserCardList = ({ users }) => {
  return (
    <div className="grid-container">
      {users.map((user) => {
        return (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
          />
        );
      })}
    </div>
  );
};

export default UserCardList;

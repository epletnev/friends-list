import React from "react";
import "../App.css";

const UserCard = ({ name, email, id }) => {
  return (
    <div className="card-container">
      <img
        alt="friends"
        src={`https://source.unsplash.com/300x300/?face?${id}`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserCard;

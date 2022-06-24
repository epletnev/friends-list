import React, { useState, useEffect } from "react";
import UserCardList from "./components/UserCardList";
import SearchBox from "./components/SearchBox";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !users.length ? (
    <h1 className="app-container">Loading</h1>
  ) : (
    <div className="app-container">
      <h1>FriendsList</h1>
      <SearchBox searchChange={onSearchChange} />
      <UserCardList users={filteredUsers} />
    </div>
  );
}

export default App;

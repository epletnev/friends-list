import React from "react";
import "../App.css";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder="search friends"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;

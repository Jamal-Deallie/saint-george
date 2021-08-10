import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import "./SearchIcon.css";

const SearchIcon = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

    const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <BsIcons.BsSearch className="search--icon" />
      <div className="searchBar">
        <input type="text" placeholder="Search Sneakers" />
        <AiIcons.AiOutlineSearch />
      </div>
    </div>
  );
};

export default SearchIcon;

import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import src from "../../Assets/Images/saint-logo.svg";
import { NavLink, Link } from "react-router-dom";
import { Link_Items as items } from "../../Shared/Link_Items";
import CartIcon from "../../Components/CartIcon/CartIcon";
import SearchIcon from "../../Components/SearchIcon/SearchIcon";
import "./Header.css";
import CartDropDown from "../../Components/CartDropdown/CartDropDown";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const [cartOpen, setCartOpen] = useState(false);
  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <div className="header">
      <div className="nav--items">
        <div className="open--btn" onClick={toggle}>
          <FaIcons.FaBars />
        </div>
        <Link to="/">
          <img src={src} alt="Saint George Logo" className="logo" />
        </Link>
        <div className="nav--icons">
          <SearchIcon />
          <div onClick={toggleCart}>
            <CartIcon />
          </div>
        </div>
        <div className={cartOpen ? "cart active" : "cart"}>
          <CartDropDown />
        </div>
      </div>
      <nav className={open ? "nav--menu active" : "nav--menu"}>
        <div className="close--btn" onClick={toggle}>
          <AiIcons.AiOutlineClose />
        </div>

        <Link to="/">
          <img src={src} alt="Saint George Logo" className="logo" />
        </Link>

        <div className="header--signin">
          <MdIcons.MdAccountBox />
          <span>Sign in / Register</span>
        </div>
        <ul className="nav--menu_links">
          {items.map((item) => {
            const { id, title, path, cname } = item;
            return (
              <li key={id} className={cname} onClick={toggle}>
                <NavLink to={path}>{title}</NavLink>
              </li>
            );
          })}
        </ul>
        <div className="nav--menu_locations">
          <h2>Retail Stores</h2>
          <div className="location--dallas">
            <h3>Saint George - Dallas</h3>
            <span>123 Main Street, Dallas, TX, 75001</span>
          </div>
          <div className="location--plano">
            <h3>Saint George - Plano</h3>
            <span>123 Washington Street, Plano, TX, 70000</span>
          </div>
        </div>
        <div className="nav--menu_contact">
          <h2>Customer Service</h2>
          <h3>214-123-4567</h3>
          <h3>contact@saintgeorge</h3>
          <div className="nav--menu_social">
            <FaIcons.FaFacebookF />
            <FaIcons.FaTwitter />
            <FaIcons.FaInstagramSquare />
            <FaIcons.FaYoutube />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

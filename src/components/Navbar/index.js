import React, { useState } from "react";
import logo from '../../assets/logo.svg';
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MenuItems } from "../../core/MenuItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <button
                            type="button"
                            className="nav-btn"
                            onClick={toggle}
                        >
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul 
                        className={isOpen ? "nav-links show-nav" : "nav-links"}
                    >
                      {
                        MenuItems.map((item, index) => {
                          return <li key={index}>
                            <Link to={item.path} onClick={
                              () => {
                                toggle();
                              }
                            }>{item.name}</Link>
                          </li>
                        })
                      }
                       
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;
import React from "react";

import { NavLink, Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div>
                    <Link className="header__logo" to="/">
                        Your Todos
                    </Link>
                </div>
                <nav className="header_nav-bar">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <NavLink className="header__nav-link" to={"/"}>
                                Home
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink
                                className="header__nav-link"
                                to="/add-todo"
                            >
                                Add todo
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

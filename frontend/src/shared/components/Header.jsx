import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add-todo">Add todo</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

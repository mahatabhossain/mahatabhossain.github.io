import React from 'react'
import pic1 from '../Images/pic1.jpg';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={pic1} alt="profile_image" />
                </div>
                <ul className="nav-items">
                    <li className="nav-links">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-links">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-links">
                        <NavLink to="/portfolio" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="nav-links">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-links">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>&copy; 2021 Mahatab Hossain </p>
                </footer>
            </nav>
        </div>
    )
}

export default NavBar;

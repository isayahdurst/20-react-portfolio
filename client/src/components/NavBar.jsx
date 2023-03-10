import { Link, NavLink } from 'react-router-dom';
import React from 'react';

const Navbar = ({ children }) => {
    return (
        <div className="container">
            <nav
                className="navbar"
                role="navigation"
                aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <NavLink to="/">
                            <b>Isayah Durst</b>
                        </NavLink>
                    </a>
                    <a
                        role="button"
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            <NavLink to="/experience">Experience</NavLink>
                        </a>
                        <a className="navbar-item">
                            <NavLink to="/services">Services</NavLink>
                        </a>

                        <a className="navbar-item">
                            <NavLink to="/work">Work</NavLink>
                        </a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-danger">
                                    <NavLink to="/contact">
                                        <strong>Contact</strong>
                                    </NavLink>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

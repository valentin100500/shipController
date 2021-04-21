import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import React from "react";
import classes from './Header.module.scss'


const Header = ({pageTitle}) => {
    return (
        <Navbar variant='dark' expand="sm" bg='dark' className={classes.navigation}>
            <Navbar.Brand>
                <NavLink to='/' >
                    <img src="logo192.png"
                         className={classes.navImage}
                    />
                </NavLink>
                {pageTitle}
            </Navbar.Brand>
            <Navbar.Toggle className={classes.toggle} aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink activeClassName={classes.active} to='/control'>Керування</NavLink>
                    <NavLink activeClassName={classes.active} to='/indexes'>Показники</NavLink>
                    <NavLink activeClassName={classes.active} to='/settings'>Налаштування</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header


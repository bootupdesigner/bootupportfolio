import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Collapse from 'react-bootstrap/Collapse';


const Menu = () => {
    return(
    <NavBar expand="lg" bg="dark" variant="dark">
        <NavBar.Brand href="/">
            Boot Up Designer
        </NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id="basic-navbar-nav">
        <Nav>
        <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
        <Nav.Link href="/Contact">Contact</Nav.Link>
        </Nav>
        </NavBar.Collapse>
    </NavBar>
    );
};

export default Menu;
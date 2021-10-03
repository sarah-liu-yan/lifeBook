import React from 'react'
import { Nav,Navbar, NavbarBrand } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';
/**
* @author
* @function Navigation
**/

export const Navigation = (props) => {
  return(
    <Navbar className="border-bottom ml-2" bg="transparent" expand="lg"> 
        <Navbar.Brand>
        LifeBook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle"/>
        <NavbarCollapse id="navbar-toggle">
        <Nav className = "ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            
        </Nav>
        </NavbarCollapse>
    </Navbar>
   )

 }
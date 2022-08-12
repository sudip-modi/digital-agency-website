import React from "react";
import "./TopNav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown} from "react-bootstrap";
import logo from "../../assets/images/softgenicslogo.jpg";
import { Link, Outlet } from "react-router-dom";

const TopNav = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
            <Link to="/">
            <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Brand logo"
          />
            </Link>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link className="nav-link" to="design">
                  Design
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link" to="development">
                  Development
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="nav-link" to="marketing">
                  Marketing
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link className="nav-link" to="/ourproducts">
              Our Products
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
    
  );
};

export default TopNav;

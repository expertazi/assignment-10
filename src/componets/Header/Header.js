import React from "react";
import {
  Container,
  Button,
  Nav,
  Navbar,
  NavDropdown,
  NavLink,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import useAuth from "./../../contexts/useAuth";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  return (
    <div className="main-header sticky-top">
      <Navbar sticky="top" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand to="/home">
            <img
              src="https://cdn.osudpotro.com/appImage/osudpotro-footer-logo.webp?w=256"
              width="100%"
              height="43"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link as={HashLink} to="/home">
                Home
              </Nav.Link>
              <Link to="/allMedicine">Medicine</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/aboutUs">About Us</Link>
              <Link to="/services">Services</Link>
              {user?.email ? (
                <Button onClick={logOut} variant="dark">
                  Logout
                </Button>
              ) : (
                <Link to="/login">Login</Link>
              )}
              <Navbar.Text> Signned in as: {user?.displayName}</Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-page">
      <div className="header-text">
        <Navbar className="header-navbar" bg="white" data-bs-theme="light">
          <Container>
            <Navbar.Brand className="header-logo" href="#home">
              <img alt="Null" src="shoes-logo.jpeg" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Anasayfa</Nav.Link>
              <Nav.Link href="#features">Ürünler</Nav.Link>
              <Nav.Link href="#features">Hakkımızda</Nav.Link>
              <Nav.Link href="#pricing">İletişim</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
      </div>
      <div className="header-basket">
          <NavLink>
            <AiOutlineShoppingCart />
          </NavLink>
        </div>


    </div>
  );
};

export default Header;

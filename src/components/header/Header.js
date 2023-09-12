import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const {basketData} = useSelector((state) => state.data)
  const navigate = useNavigate()
  return (
    <div className="header-cmp">
      <div className="header-text">
        <Navbar className="header-navbar" bg="white" data-bs-theme="light">
          <Container>
            <Navbar.Brand className="header-logo" href="/">
              <img alt="Null" src="/shoes-logo.jpeg" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Anasayfa</Nav.Link>
              <Nav.Link href="/productlist">Ürünler</Nav.Link>
              <Nav.Link href="#">Hakkımızda</Nav.Link>
              <Nav.Link href="#">İletişim</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        
      </div>
      <div onClick={()=>navigate('/basket')} className="header-basket">
          <NavLink>
            <AiOutlineShoppingCart />
            
          </NavLink>
          <button  className="basketNumber">
             <p>{basketData.length}</p>
            </button>
        </div>


    </div>
  );
};

export default Header;

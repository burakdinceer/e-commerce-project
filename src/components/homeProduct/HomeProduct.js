import React from "react";
import { Container, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./HomeProduct.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const HomeProduct = () => {
  const { product } = useSelector((state) => state.data);

  return (
    <div className="homeProduct">
      <Container>
        <div className="product-title">
          <h2>ÜRÜNLERİMİZ</h2>
        </div>
        <div className="product-card">
          {product?.slice(0, 3).map((item) => (
            <div className="product-card-item">
              <Card>
                <Card.Img
                  className="product-card-img"
                  variant="top"
                  src={item.image}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.price} TL</Card.Text>
                <div className="detail-btn">  <Button variant="primary">Detayları Gör</Button></div>
                </Card.Body>
              </Card>
            </div>
          ))}
       <NavLink href="/productlist"><Button className="all-btn"><AiOutlineArrowRight/></Button></NavLink>
        </div>
       
      </Container>
    </div>
  );
};

export default HomeProduct;

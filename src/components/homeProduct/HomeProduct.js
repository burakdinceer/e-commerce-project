import React from "react";
import { Container, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./HomeProduct.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight,AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const HomeProduct = () => {
  const { product } = useSelector((state) => state.data);

  const navigate = useNavigate()
  
  const handleNavigate = (item) => {
    navigate(`/detail/${item.id}`)
    
  }


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
                <Card.Subtitle className='card-star my-2'>
                {
                    [...Array(5)].map((_, i) => (
                        <AiOutlineStar key={i}
                        style={{color: i < item.rate ? `orange` : "gray"}}
                        />
                    ))
                }
                <span><small>({item.totalRate})</small></span>
            </Card.Subtitle>
                  <Card.Title>{item.name}</Card.Title>
                  
                  <Card.Text>{item.price} TL</Card.Text>
              <NavLink onClick={()=>handleNavigate(item)} className="detail-btn"> <Button variant="primary">Detayları Gör</Button> </NavLink>
              
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

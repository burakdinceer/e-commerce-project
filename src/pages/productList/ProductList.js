import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import './ProductList.scss'
import { changePage } from "../../redux/dataSlice";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
    const {product,currentPage, productsPerPage} = useSelector((state) => state.data)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = product.slice(startIndex, endIndex);
    const handleChange = (item) => {
      navigate(`/detail/${item.id}`)
    }

  return (
    <div className="product-list">
      <Layout>
      <Container>
        <div className="product-title">
          <h2>ÜRÜNLERİMİZ</h2>
        </div>
        <div className="product-card">
          {currentProducts?.map((item) => (
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
                <div onClick={()=>handleChange(item)} className="detail-btn">  <Button variant="primary">Detayları Gör</Button></div>
                </Card.Body>
              </Card>
            </div>
          ))}
     
        
        </div>
        <div className="pagination">
        {Array.from({ length: Math.ceil(product.length / productsPerPage) }).map((_, index) => (
          <button key={index} onClick={() => dispatch(changePage(index + 1))}>
            {index + 1}
          </button>
        ))}
      </div>
      </Container>
      </Layout>
    </div>
  );
};

export default ProductList;

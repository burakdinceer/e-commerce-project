import React, { useState } from "react";
import "./Detail.scss";
import Layout from "../../components/layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Row, Container, NavLink } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineStar } from "react-icons/ai";
import Modal from "../../components/modal/CustomModal";
import CustomModal from "../../components/modal/CustomModal";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product } = useSelector((state) => state.data);
  const [showModal, setShowModal] = useState(false);
  const newArr = product.filter((item) => item.id === +id);

  const newProduct = newArr[0];

  const handleNavigate = () => {
    navigate(-1);
  };

  const modalChange = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="detail-page">
      <Layout>
        <div className="detail-main">
          <Container>
            <Row>
              <Col xl={6}>
                <img src={newProduct.image} />
              </Col>
              <Col xl={6}>
                {showModal ? (
                  <CustomModal  setShowModal={setShowModal} />
                ) : (
                  <>
                    <div className="detail-back">
                      <NavLink onClick={handleNavigate}>
                        <AiOutlineArrowLeft />
                        Geri Dön
                      </NavLink>
                    </div>
                    <div className="detail-name">{newProduct.name}</div>
                    <div className="detail-rate">
                      {[...Array(5)].map((_, i) => (
                        <AiOutlineStar
                          className="detail-star"
                          key={i}
                          style={{
                            color: i < newProduct.rate ? `orange` : "gray",
                          }}
                        />
                      ))}
                      <span>
                        <small>({newProduct.totalRate})</small>
                      </span>
                    </div>
                    <div className="detail-price">{newProduct.price} TL</div>
                    <div className="detail-size">
                      {newProduct.sizes.map((item) => (
                        <button>{item}</button>
                      ))}
                    </div>
                    <div className="detail-stock">
                      Stok:
                      {newProduct.stock}
                    </div>
                    <div className="detail-btn">
                      <button onClick={modalChange} className="add-btn">
                        Sepete Ekle
                      </button>
                      <button className="go-btn">Sepete Git</button>
                    </div>
                  </>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </div>
  );
};

export default Detail;

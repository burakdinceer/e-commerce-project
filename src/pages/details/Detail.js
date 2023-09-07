import React, { useState } from "react";
import "./Detail.scss";
import Layout from "../../components/layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Container, NavLink } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineStar } from "react-icons/ai";
import CustomModal from "../../components/modal/CustomModal";
import { addBasket, selectSize } from "../../redux/dataSlice";
import Swal from "sweetalert2";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product,size } = useSelector((state) => state.data);
  const [showModal, setShowModal] = useState(false);
  const dispacth = useDispatch()
  const newArr = product.filter((item) => item.id === +id);

  const newProduct = newArr[0];

  const handleNavigate = () => {
    navigate(-1);
  };

  const handleSize = (el) => {
    dispacth(selectSize(el))
  }

  const modalChange = (item) => {
   if(size===''){
    setShowModal(true);
   }
   else{
    const newData = {...item, sizes:size}
    dispacth(addBasket(newData))
    dispacth(selectSize(''))
    Swal.fire('Sepete Eklendi...')
   }
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
                        <button onClick={()=>handleSize(item)}>
                          {item}
                          </button>
                      ))}
                    </div>
                    <div className="detail-stock">
                      Stok:
                      {newProduct.stock}
                    </div>
                    <div className="detail-btn">
                      <button onClick={()=>modalChange(newProduct)} className="add-btn">
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

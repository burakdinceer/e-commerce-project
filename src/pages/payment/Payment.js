import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addPaymentData, basketReset } from "../../redux/dataSlice";
import Swal from "sweetalert2";
import "./Payment.scss";
import CardModal from "../../components/modal/CardModal";

const Payment = () => {
  const { paymentData, basketData } = useSelector((state) => state.data);
  const [showModal, setShowModal] = useState(false);
  const paymentNewData = paymentData[0];
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispacth = useDispatch();
  const onSubmit = (data) => {
    const newData = data.payment === 'Kredi Kartı İle Ödeme' ?
    setShowModal(true)
    :
    dispacth(addPaymentData(data));
  };

 

  const totalPrice = basketData.reduce((total, item) => {
    const itemTotal = item.price + item.price * 0.2;
    return total + itemTotal;
  }, 50);
  const totalProduct = basketData.reduce(
    (total, product) => total + product.price,
    0
  );

  const handleNavigate = () => {
    navigate('/')
    Swal.fire('Siparişiniz Onaylandı')
   dispacth(basketReset())
  }

  return (
    <Layout>
      <div className="payment-page">
        <Container>
          <Row>
            <Col xl={6} md={12}>
              <NavLink className="basketDone" onClick={() => navigate(-1)}>
                <AiOutlineArrowLeft />
                Geri Dön
              </NavLink>
              <p className="formText">Bilgileri Eksiksiz Doldurunuz...</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formName">
                  <p>İsim</p>
                  <input
                    placeholder="İsim Giriniz"
                    required
                    type="text"
                    {...register("name")}
                  />
                </div>
                <div className="formSurname">
                  <p>Soyad</p>
                  <input
                    placeholder="Soyad Giriniz"
                    required
                    type="text"
                    {...register("surname")}
                  />
                </div>
                <div className="formAdress">
                  <p>Adres</p>
                  <input
                    placeholder="Adres Bilgisi Giriniz"
                    required
                    type="text"
                    {...register("adress")}
                  />
                </div>
                <div className="formMail">
                  <p>Mail</p>
                  <input
                    placeholder="Mail Adresi Giriniz"
                    required
                    type="email"
                    {...register("email")}
                  />
                </div>

                <div className="formPayment">
                  <p>Ödeme Yöntemi</p>
                 {
                  showModal ?
                  <CardModal/>
                : <select required {...register("payment")}>
                <option value="Kapıda Ödeme">Kapıda Nakit Ödeme</option>
                
              
              <option value="Kredi Kartı İle Ödeme">
              Kapıda Kredi Kartı ile Ödeme
            </option>
              
              </select>
                 }
                </div>
                <div className="formCargo">
                  <p>Kargo Seçimi</p>
                  <select required {...register("cargo")}>
                    <option value="Aras Kargo">Aras Kargo</option>
                    <option value="MNG Kargo">MNG Kargo</option>
                  </select>
                </div>

                <input className="formSubmit" type="submit" />
              </form>
            </Col>
            <Col  xl={6} md={12}>
              <p style={{fontSize: '2rem'}}>Sipariş Bilgileri</p>
              {paymentData.length > 0 ? (
                <div className="information">
                  <div className="information-person">
                    <p> İsim : {paymentNewData.name}</p>
                    <p> Soyisim : {paymentNewData.surname}</p>
                    <p> Adres : {paymentNewData.adress}</p>
                    <p> Mail : {paymentNewData.email}</p>
                    <p> Ödeme Yöntemi : {paymentNewData.payment}</p>
                    <p> Kargo : {paymentNewData.cargo}</p>
                  </div>
                  <div>
                    <p style={{fontSize: '1.5rem'}}>Sepet Bilgileri</p>
                    {basketData.map((item) => (
                      <div  className="information-text" >
                        <div>
                          <p>{item.name}</p>
                          <p>{item.price}</p>
                        </div>
                        
                      </div>
                    ))}
                    <div className="information-price">
                          <p>Tutar : {totalProduct} TL</p>
                          <p>KDV : 20%</p>
                          <p>Kargo : 50 TL</p>
                          <p>Toplam Tutar :{totalPrice.toFixed(2)} TL</p>
                        </div>
                  </div>
                  <button onClick={()=>handleNavigate()} className="information-button">Onayla</button>
                </div>
              ) : null}
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Payment;

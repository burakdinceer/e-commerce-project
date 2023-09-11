import React from "react";
import Layout from "../../components/layout/Layout";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPaymentData } from "../../redux/dataSlice";
import './Payment.scss'

const Payment = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispacth = useDispatch()
  const onSubmit = (data) => {
    dispacth(addPaymentData(data))
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
              <form  onSubmit={handleSubmit(onSubmit)}>
                <div className="formName">
                  <p>İsim</p>
                  <input placeholder="İsim Giriniz" required type='text' {...register("name")} />
                </div>
                <div className="formSurname">
                  <p>Soyad</p>
                  <input placeholder="Soyad Giriniz" required type='text' {...register("surname")} />
                </div>
                <div className="formAdress">
                  <p>Adres</p>
                  <input placeholder="Adres Bilgisi Giriniz" required type='text' {...register("adress")} />
                </div>
                <div className="formMail">
                  <p>Mail</p>
                  <input placeholder="Mail Adresi Giriniz" required type="email" {...register("email")} />
                </div>

                <div className="formPayment">
                  <p>Ödeme Yöntemi</p>
                  <select required {...register("payment")}>
                    <option value="door">Kapıda Nakit Ödeme</option>
                    <option value="card">Kapıda Kredi Kartı ile Ödeme</option>
                  </select>
                </div>
                <div className="formCargo">
                  <p>Kargo Seçimi</p>
                  <select required {...register("cargo")}>
                    <option value="aras">Aras Kargo</option>
                    <option value="mng">MNG Kargo</option>
                  </select>
                </div>

                <input className="formSubmit" type="submit" />
              </form>
            </Col>
            <Col  xl={6} md={12}>
              a
            </Col>
          </Row>
        </Container>
      </div>
      </Layout>
    
  );
};

export default Payment;

import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addPaymentData } from "../../redux/dataSlice";
import "./CardModal.scss";
const CardModal = ({ setShowModal }) => {
    const {dataForm} = useSelector((state) => state.data)
    const dispacth =  useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        numberFirst:'',
        numberSecond:'',
        numberThird:'',
        numberFourth:'',
        mount:'',
        year:'',
        cvc:''
       
      });
   
      
      const handleInputChange = (e) => {
        const { name, value } = e.target;
      
        
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
    const handleModal = () => {
      setShowModal(false)
      dispacth(addPaymentData(dataForm))
    }
    

  return (
    <div className="card-modal">
   <Row style={{width:'100%'}}>
   <Col xl={6} md={12}>
   <div className="card">
        <div>X Bank</div>
        <div className="card-no">{formData.numberFirst} {formData.numberSecond} {formData.numberThird} {formData.numberFourth}</div>
        <div className="card-bilgi">
          <div className="card-name">{formData.name}</div>
        </div>
        <div className="card-date">{formData.mount}/{formData.year}</div>
        <div className="card-cvc">{formData.cvc}</div>
      </div>
   </Col>
      <Col xl={6} md={12} >
      <div className="card-inputs">
        <form >
          <div className="name-input">
            <label>Kart Üzerindeki İsim</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              type='text'
            />
          </div>
          <div className="number-input">
            <label>Kart No</label>
            <input
            name='numberFirst'
            value={formData.numberFirst}
            onChange={handleInputChange}
             type='text'
             maxLength={4}
            />
            <input
            name='numberSecond'
            value={formData.numberSecond}
            onChange={handleInputChange}
             type='text'
             maxLength={4}
            />
            <input
            name='numberThird'
            value={formData.numberThird}
            onChange={handleInputChange}
             type='text'
             maxLength={4}
            />
             <input
            name='numberFourth'
            value={formData.numberFourth}
            onChange={handleInputChange}
             type='text'
             maxLength={4}
            />

          </div>
          <div className="date-input">
            <label>Son Kullanma Tarihi</label>
            <input 
              name="mount"
              value={formData.mount}
              onChange={handleInputChange}
              maxLength={2}
              type='text'/>
               <input 
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              maxLength={2}
              type='text'/>
          </div>
          <div className="cvc-input">
                <label>CVC</label>
                <input
                name="cvc"
                value={formData.cvc}
                onChange={handleInputChange}
                maxLength={3}
                type='text'
                />
              </div>
          <div className="form-button">
          
          </div>
        </form>
      </div>
      <button  onClick={()=>handleModal()} >Gönder</button>
      </Col>
   </Row>
    </div>
  );
};

export default CardModal;

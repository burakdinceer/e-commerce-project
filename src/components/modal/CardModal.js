import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./CardModal.scss";
const CardModal = ({ setShowModal }) => {
    const [formData, setFormData] = useState({
        name: '',
        surname:''
       
      });
    
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
   

      };
    
    

  return (
    <div className="card-modal">
      <div className="card">
        <div>X Bank</div>
        <div className="card-no">*** **** *** *** *** 1333</div>
        <div className="card-bilgi">
          <div className="card-name">{formData.name}</div>
          <div className="card-surname">{formData.surname}</div>
        </div>
        <div className="card-date">20/2030</div>
      </div>
      <div className="card-inputs">
        <form onSubmit={handleSubmit}>
          <div className="name-input">
            <label>İsim</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              type='text'
            />
          </div>
          <div className="surname-input" >
        <label>Soyad</label>
        <input
        name='surname'
        value={formData.surname}
        type='text'
        onChange={handleInputChange}
        />
          </div>
          <Button type="submit">Gönder</Button>
        </form>
      </div>
    </div>
  );
};

export default CardModal;

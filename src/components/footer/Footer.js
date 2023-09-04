import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
        <Container>
            <Row>
            <Col xl={12} className='footer-logo'>
                <img src='shoes-logo.jpeg'/>
            </Col>
            <Col xl={12} className='footer-text'>
                <p>FUTURE STYLE</p>
            </Col>
           <Col xl={12} className='footer-contact'>
            <p>Adres: Lorem lorem lorem lorem lorem lorem</p>
            <p>Tel No: 000 000 000</p>
           </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer
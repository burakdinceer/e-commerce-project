import React from 'react'
import './About.scss'
import { Col, Container, Row } from 'react-bootstrap'
const About = () => {
  return (
    <div className='about'>
         <Container>
         <Row className='about-row'>
            <Col className='about-col' sm={12} md={10}>
              <div className="text">
              <h2>Future Style</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusantium distinctio praesentium modi illo deleniti repellat, illum reprehenderit alias tempore voluptatibus vero dolorum eum velit necessitatibus animi sed, a esse quasi, atque saepe. Consequatur excepturi alias consequuntur aperiam suscipit placeat voluptatum quia earum tempore, provident unde sit autem, blanditiis amet odit nobis quo dolor! Voluptate minus adipisci odio id hic!</p>
              </div>
            
           
                <div className="img-box">
                    <img src="https://images.pexels.com/photos/18035463/pexels-photo-18035463/free-photo-of-kent-insanlar-kent-simgesi-su.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="" />
                </div>
            </Col>  
             <Col className='about-col' sm={12} md={10}>
                <div className="img-box">
                    <img src="https://images.pexels.com/photos/18035463/pexels-photo-18035463/free-photo-of-kent-insanlar-kent-simgesi-su.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="" />
                </div>
           
                <div className="text">
                <h2>Future Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusantium distinctio praesentium modi illo deleniti repellat, illum reprehenderit alias tempore voluptatibus vero dolorum eum velit necessitatibus animi sed, a esse quasi, atque saepe. Consequatur excepturi alias consequuntur aperiam suscipit placeat voluptatum quia earum tempore, provident unde sit autem, blanditiis amet odit nobis quo dolor! Voluptate minus adipisci odio id hic!</p>
                </div>
               
            </Col>
        </Row>
         </Container>
    </div>
  )
}

export default About
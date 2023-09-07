import React from "react";
import "./Basket.scss";
import Table from "react-bootstrap/Table";
import Layout from "../../components/layout/Layout";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { deleteBasket } from "../../redux/dataSlice";
const Basket = () => {

    const {basketData} = useSelector((state) => state.data)
    const dispacth = useDispatch()
    const handleDelete = (id) => {
        dispacth(deleteBasket(id))
    }

  return (
    <div className="basketPage">
      <Layout>
        <Container>
          <Table className="basketTable" striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Ürün Resmi</th>
                <th>Ürün Adı</th>
                <th>Numara</th>
                <th>Fiyat</th>
              </tr>
            </thead>
            <tbody>
              { basketData.map((item,key) => (
                <tr>
                  <td>{key+1}</td>
                  <td style={{ width: "200px" }}><img src={item.image}/></td>
                  <td>{item.name}</td>
                  <td>{item.sizes}</td>
                  <td>{item.price}</td>
                  <td ><NavLink onClick={()=>handleDelete(item.id)} style={{color:'red'}}><AiTwotoneDelete/></NavLink></td>
                </tr>
              ))
                
              }
            </tbody>
          </Table>
        </Container>
      </Layout>
    </div>
  );
};

export default Basket;

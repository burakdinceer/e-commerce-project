import React from "react";
import "./Basket.scss";
import Table from "react-bootstrap/Table";
import Layout from "../../components/layout/Layout";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneDelete } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { basketReset, deleteBasket } from "../../redux/dataSlice";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Basket = () => {
  const { basketData } = useSelector((state) => state.data);
  const dispacth = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    dispacth(deleteBasket(id));
  };

  const totalPrice = basketData.reduce(
    (total, product) => total + product.price,
    0
  );

  const resetData = () => {
    dispacth(basketReset())
  }
  const handleNavigate = () => {
    basketData.length >0 ?
    navigate('/basket/payment')
    : navigate()
  }

  return (
    <div className="basketPage">
      <Layout>
        <Container>
          <NavLink className="basketDone" onClick={() => navigate(-1)}>
            <AiOutlineArrowLeft />
            Geri Dön
          </NavLink>
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
              {basketData.map((item, key) => (
                <tr>
                  <td>{key + 1}</td>
                  <td style={{ width: "200px" }}>
                    <img src={item.image} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.sizes}</td>
                  <td>{item.price}</td>
                  <td>
                    <NavLink
                      onClick={() => handleDelete(item.id)}
                      style={{ color: "red" }}
                    >
                      <AiTwotoneDelete />
                    </NavLink>
                  </td>
                </tr>
              ))}
              <tr>
                <td>Total Fiyat</td>
                <td>{totalPrice} TL</td>
              </tr>
            </tbody>
          </Table>
          <div className="basketButton">
            <button onClick={resetData}>Sepeti Temizle</button>
            <button onClick={()=>handleNavigate()}>Ödemeye Geç</button>
          </div>

        </Container>
      </Layout>
    </div>
  );
};

export default Basket;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Basket from './pages/basket/Basket';
import Detail from './pages/details/Detail';
import Home from './pages/home/Home';
import Payment from './pages/payment/Payment';
import ProductList from './pages/productList/ProductList';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/productlist' element={<ProductList/>}/>
    <Route path='/detail/:id' element={<Detail/>}/>
    <Route path='/basket' element={<Basket/>}/>
    <Route path='/basket/payment' element={<Payment/>}/>
   </Routes>
   </>
  );
}

export default App;

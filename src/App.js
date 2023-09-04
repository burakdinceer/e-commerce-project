import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import ProductList from './pages/productList/ProductList';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/productlist' element={<ProductList/>}/>
   </Routes>
   </>
  );
}

export default App;

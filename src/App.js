import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './pages/details/Detail';
import Home from './pages/home/Home';
import ProductList from './pages/productList/ProductList';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/productlist' element={<ProductList/>}/>
    <Route path='/detail/:id' element={<Detail/>}/>
   </Routes>
   </>
  );
}

export default App;

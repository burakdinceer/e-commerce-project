import React from 'react'
import About from '../../components/about/About'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import HomeProduct from '../../components/homeProduct/HomeProduct'
import Slider from '../../components/slider/Slider'

const Home = () => {
  return (
    <div>
        <Header/>
        <Slider/>
        <HomeProduct/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home
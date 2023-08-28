import React from 'react'
import About from '../../components/about/About'
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
    </div>
  )
}

export default Home
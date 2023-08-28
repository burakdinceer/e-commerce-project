import React from 'react'
import Header from '../../components/header/Header'
import HomeProduct from '../../components/homeProduct/HomeProduct'
import Slider from '../../components/slider/Slider'

const Home = () => {
  return (
    <div>
        <Header/>
        <Slider/>
        <HomeProduct/>
    </div>
  )
}

export default Home
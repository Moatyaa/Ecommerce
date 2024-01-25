import React, { useEffect, useState } from 'react'
import MainSlider from '../MainSlider/MainSlider'
import Products from '../Products/Products'
import CategorySlider from '../CategorySlider/CategorySlider'
import { Helmet } from 'react-helmet'


export default function Home() {
  
  return <>
    <MainSlider/>
    <CategorySlider/>
    <Products/>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Home" />
    </Helmet>
  </>
}

import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { getBrands } from '../../Redux/Brands'

export default function Brands() {
  // let {brands} = useSelector((state)=> state.brands)
  // let dispatch = useDispatch()
  // let [arr , setArr] = useState([])
  // async function brands() {
  //   let data = await dispatch(getBrands())
  //   setArr(data.payload.recipes)
  //   console.log(data.payload.recipes)
  // }

  // useEffect(()=>{
  //   brands()
  // } , [])
  return <>
      <Helmet>
        <title>Brands</title>
        <meta name="description" content="Fresh Cart Brands" />
      </Helmet>
      <div>Brands</div>
  </>
}
 
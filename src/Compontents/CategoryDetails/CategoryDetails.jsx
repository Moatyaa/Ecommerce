import axios from 'axios'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

export default function CategorieDetails() {
let parms = useParams()

function getCategoryDetails(id){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
}

let {data} = useQuery('categorydetails', ()=> getCategoryDetails(parms.id))
console.log(data)
return <>
  <Helmet>
    <title>Categories</title>
    <meta name="description" content="Cart" />
  </Helmet>
  <div className="row mt-4">
      {data?.data.data ? data?.data.data.map(cat => <div className='col-md-3 '>
      <div className="m-3 cursor-pointer shadow">
         <img className='w-100' height={300} src={cat.image} alt=""/>
         <h6 className='mt-3 p-1 fw-bolder'>{cat.name}</h6>
      </div>
    </div>) :''}
  </div>

</>
}

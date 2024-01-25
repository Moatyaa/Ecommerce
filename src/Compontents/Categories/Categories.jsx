import axios from 'axios'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useQuery } from 'react-query'
import { Audio } from 'react-loader-spinner'
export default function Categories() {
  function getCategory() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
  }

  let {data , isLoading} = useQuery("getCategory" , getCategory)
  
  return <>
  <Helmet>
    <title>Categories</title>
    <meta name="description" content="Cart" />
  </Helmet>
  <div className="row mt-4">
    {isLoading ?           <div className="d-flex justify-content-center mt-5">
            <Audio
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="audio-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
          </div> : 
            <div className='row'>
              {data?.data.data ? data?.data.data.map((cat , index) => <div key={index} className='col-md-3 '>
              <div div className="m-3 cursor-pointer shadow">
                <img className='w-100' height={300} src={cat.image} alt=""/>
                <h6 className='mt-3 p-1 fw-bolder'>{cat.name}</h6>
              </div>
            </div>) :''}              
          </div>
    }
  </div>

</>
}

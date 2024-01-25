import { useFormik } from 'formik'
import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { cartContext } from '../../Context/CartContext'

export default function Address() {
  let {onlinePayment , cartId , clearCart} = useContext(cartContext)

  async function addressSubmit(values){
    let response = await onlinePayment( localStorage.getItem('cartId') , 'http://localhost:3000', values )
    window.location.href = response.data.session.url 
  }

  async function deleteOrders() {
    let response = await clearCart()
    console.log(response)
  }
 
  let formik = useFormik({
    initialValues: {
        details: "",
        phone: "",
        city: ""
    },
    onSubmit: addressSubmit
  })
  return <>
    <Helmet>
      <title>Address</title>
      <meta name="description" content="Address" />
    </Helmet>

    <div className="container w-50 mt-5">
        <form action="" onSubmit={formik.handleSubmit}>
          <label htmlFor="details">Details</label>
          <input className='form-control mb-3' type="text" value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} name='details'/>
          <label htmlFor="phone">Phone</label>
          <input className='form-control mb-3' type="tel" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} name='phone'/>
          <label htmlFor="city">City</label>
          <input className='form-control mb-3' type="text" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} name='city'/>
          <button type='submit' className='btn bg-main text-white'>Pay Now</button>
        </form>
    </div>
  </>

}

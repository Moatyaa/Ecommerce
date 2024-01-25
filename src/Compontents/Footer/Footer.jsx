import React from 'react'
import pay1 from '../../Assests/screens/Amazon-Pay-1.png.webp'
import pay2 from '../../src/Assests/screens/American-Express-Blue-logo.png'
import pay3 from '../../src/Assests/screens/i-3-90885664-mastercard-logo.jpg'
import pay4 from '../../src/Assests/screens/PayPal.svg.png'
import store1 from '../../src/Assests/screens/download-on-the-app-store4659.jpg'
import store2 from '../../src/Assests/screens/en_badge_web_generic.png'
import "../../src/index.css"
export default function Footer() {
return <>
    <div className='m-5'>
        <h3>Get the FreshCart app</h3>
        <p>We Will send you a link, open it on your phone to download the app</p>
        <div className='d-flex justify-content-between mx-3'>
            <input placeholder='Email...' type="text" className='form-control w-50' />
            <button className='btn bg-main text-white w-25'>Share App Link</button>
        </div>
    </div>
    <div className='d-flex justify-content-around'>
        <div className='img-holder m-5'>
            <span>Payment Partners</span>
            <span><img className='img'  src={pay1} alt="" /></span>
            <span><img className=' img' src={pay2} alt="" /></span>
            <span><img className=' img' src={pay3} alt="" /></span>
            <span><img className=' img' src={pay4} alt="" /></span>
        </div>
        <div className='img-holder m-5'>
            <span>Get deliveries With FreshCart  </span>
            <span><img className='img'  src={store1} alt="" /></span>
            <span><img className=' img' src={store2} alt="" /></span>

        </div>
    </div>
   
</>
}

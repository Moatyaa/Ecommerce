import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../../index.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Audio } from 'react-loader-spinner'
import { Helmet } from 'react-helmet'

export default function Register() {
  let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  let phoneRegex = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/
  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  let [errorMsg, setErrorMsg] = useState('')
  let [loading, isLoading] = useState(false)
  let navigate = useNavigate()

  async function submit(values) {
    isLoading(true)
    let { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values).catch(err => {
      setErrorMsg(err.response.data.message)
      isLoading(false)
    })
    if (data.message == "success") {
      navigate('/login')
    }
    isLoading(false)
  }

  let validate = Yup.object({
    name: Yup.string().min(3, 'Name must be at least 3').max(10, 'Name must be less Than 10 letters').required('Name is required'),
    email: Yup.string().matches(emailRegex, 'Email is not valid').required('Email is required'),
    phone: Yup.string().matches(phoneRegex, 'Phone is not valid').required('Phone Number is required'),
    password: Yup.string().matches(passwordRegex, 'Minimum eight characters, at least one letter and one number').required('Password is required'),
    rePassword: Yup.string().oneOf([Yup.ref('password')], 'Not Matched').required('required')
  })
  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      rePassword: ''
    },
    validationSchema: validate,
    onSubmit: submit
  })
  return <>
    <Helmet>
        <title>Register</title>
        <meta name="description" content="register" />
    </Helmet>
    <div className='container w-75'>
      <div className='fs-2 my-3'>Register</div>
      {errorMsg ? <div className='alert alert-danger'>{errorMsg}</div> : ''}
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input className='form-control my-1' type='text' id='name' name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.name && formik.touched.name ? <div className='alert alert-danger p-2 my-2'>{formik.errors.name}</div> : ''}
        <label htmlFor='email'>Email</label>
        <input className='form-control my-1' type='email' id='email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.email && formik.touched.email ? <div className='alert alert-danger p-2 my-2'>{formik.errors.email}</div> : ''}
        <label htmlFor='phone'>Phone</label>
        <input className='form-control my-1' type='tel' id='phone' name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger p-2 my-2'>{formik.errors.phone}</div> : ''}
        <label htmlFor='password'>Password</label>
        <input className='form-control my-1' type='password' id='password' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.password && formik.touched.password ? <div className='alert alert-danger p-2 my-2'>{formik.errors.password}</div> : ''}
        <label htmlFor='rePassword'>rePassword</label>
        <input className='form-control my-1' type='password' id='rePassword' name='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.rePassword && formik.touched.rePassword ? <div className='alert alert-danger p-2 my-2'>{formik.errors.rePassword}</div> : ''}
        {!loading ? <button type='submit' disabled={!(formik.isValid && formik.dirty)} className='btn text-white my-1 bg-main'>Register</button>

          :<button type='submit' disabled={!(formik.isValid && formik.dirty)} className='btn text-white my-1 bg-main'>
            <Audio
              height="20"
              width="20"
              color="#fff"
              ariaLabel="audio-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
          </button>}
      </form>
    </div>
  </>
}

import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import { userContext } from "../../Context/UserContext";
import { Helmet } from "react-helmet";

export default function Login() {
  let {setToken} = useContext(userContext)
  let [errorMsg, setErrorMsg] = useState("");
  let [loading, isLoading] = useState(false);
  let navigate = useNavigate();

  async function submit(values) {
    isLoading(true);
    let { data } = await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .catch((err) => {
        setErrorMsg(err.response.data.message);
        isLoading(false);
      });
    if (data.message == "success") {
      localStorage.setItem('token' , data.token);
      setToken(data.token);
      navigate("/home");
    }
    isLoading(false);
  }

  let validate = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: submit,
  });
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="login" />
      </Helmet>
      <div className="container w-75">
        <div className="fs-2 my-3">Login</div>
        {errorMsg ? <div className="alert alert-danger">{errorMsg}</div> : ""}
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            className="form-control my-1"
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger p-2 my-2">
              {formik.errors.email}
            </div>
          ) : (
            ""
          )}
          <label htmlFor="password">Password</label>
          <input
            className="form-control my-1"
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="alert alert-danger p-2 my-2">
              {formik.errors.password}
            </div>
          ) : (
            ""
          )}
          {!loading ? (
            <button
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
              className="btn text-white my-1 bg-main"
            >
              Login
            </button>
          ) : (
            <button type='submit' disabled={!(formik.isValid && formik.dirty)} className='btn text-white my-1 bg-main'>
            <Audio
              height="20"
              width="20"
              color="#fff"
              ariaLabel="audio-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
          </button>
          )}
        </form>
      </div>
    </>
  );
}

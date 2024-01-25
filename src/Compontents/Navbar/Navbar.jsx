import { Link } from 'react-router-dom'
import logo from '../../Assests/images/freshcart-logo.svg'
import { userContext } from '../../Context/UserContext'
import { useContext } from 'react'

export default function Navbar() {
    let { token, setToken } = useContext(userContext)
    function logout(){
        setToken(null)
        localStorage.setItem('token' , '')
    }
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#"><img src={logo} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {token ?
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="cart">Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="categories">Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="wishlist">Wishlist</Link>
                            </li>
                        </ul> : ''

                    }
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className='d-flex align-items-center mx-2'>
                            <i className='fa-brands fa-facebook mx-2'></i>
                            <i className='fa-brands fa-twitter mx-2'></i>
                            <i className='fa-brands fa-linkedin mx-2'></i>
                            <i className='fa-brands fa-youtube mx-2'></i>
                            <i className='fa-brands fa-tiktok mx-2'></i>
                        </li>
                        {token ? <li className="nav-item">
                            <Link className="nav-link" to="login" onClick={()=> logout()}>Logout</Link>
                        </li> : <>
                            <li className="nav-item">
                                <Link className="nav-link" to="login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="register">Register</Link>
                            </li>
                        </>}
                    </ul>
                </div>
            </div>
        </nav>
    </>
}
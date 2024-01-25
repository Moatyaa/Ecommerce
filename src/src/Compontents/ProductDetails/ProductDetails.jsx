import axios from "axios"
import { Helmet } from "react-helmet"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

export default function ProductDetails(){
    let params = useParams()
    function getProductdetails(id){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    }
    let {data} = useQuery('productdetails' , ()=> getProductdetails(params.id))
    
    return <>
        {data?.data.data ?<div className="row mt-3 align-items-center">
            <Helmet>
                <title>{data?.data.data.title}</title>
                <meta name="description" content="" />
            </Helmet>
            <div className="col-md-4"><img className="w-100" src={data.data.data.imageCover}></img></div>
            <div className="col-md-8">
                <h4>{data.data.data.title}</h4>
                <p className="font-sm">{data.data.data.description}</p>
                <p>{data.data.data.category.name}</p>    
                <div className="d-flex justify-content-between">
                    <span>{data.data.data.price}EGP</span>
                    <span><i className="fas fa-star rating-color"></i>{data.data.data.ratingsAverage}</span>
                </div>
                <button className="btn bg-main w-100 text-white mt-2">+ add to cart</button>
            </div>
        </div> :''}
    </>
}
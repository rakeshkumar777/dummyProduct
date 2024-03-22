import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
const SingleProduct = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState();
    console.log(product,'ppppppppppppppp');
    const [loading, setLoading] = useState(false);



    const getProductListById = () => {
        setLoading(true)
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                setProduct(res?.data)
                setLoading(false)
            }) 
            .catch(() => {
                setLoading(false)
            })
    }



    useEffect(() => {
        getProductListById();
    }, []);


    return (
        <div className='productDetialsView'>
            {loading ?
                <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
                : <>
                    <div className='productDetialsHead'>
                        <div className='d-flex align-items-center'>
                        <img style={{width:"150px"}} src={product?.image} alt="image" className='img-fluid productImage_' />
                            <h1 className='textInnerHead'>
                                <span> <i className="las la-angle-left me-3 backArrowImg_"></i></span>
                                {product?.title}</h1>
                        </div>
                      
                    </div>
                    <div className='row mt-3'>
                        <div className='col-md-8'>
                            <div className='d-flex align-items-center'>
                                <h1 className='textInnerHead me-2'>Product Name:</h1>
                                <span className='subHeading'> {product?.title}</span>
                            </div>
                            <div className='productBrand'>
                                <p className='textInnerHead'>Category: <span className='mainlightHead'>{product?.category} </span></p>
                            </div>
                            <div className='my-2'>
                                <h1 className='textInnerHead'>Details</h1>
                                <p className='textinner_ mb-4'>{product?.description} </p>
                            </div>
                            <div className='my-2'>
                                <h1 className='textInnerHead mb-2'>Cost Price</h1>
                                <p className='mainlightHead mb-4'>{`$${product?.price}`}</p>
                            </div>

                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default SingleProduct
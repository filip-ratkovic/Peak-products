import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'

import "./singleProduct.css"
import { Rating } from '@mui/material'

const SingleProduct = () => {
  const [singleData, setSingleData] = useState('')
  const [loading, setLoading] = useState(false)
  const params = useParams();
  const navigate = useNavigate()

  const fetchSingleData = () => {
    fetch(`https://dummyjson.com/products/${params.id}`)
.then(res => res.json())
.then(res => setSingleData(res))
.then(()=> {setLoading(true)})}

  useEffect(()=> {
    fetchSingleData()
  },[])

  if(loading) {
    <div>Loading</div>
  }

  return (
    <div className='single-product-main'>
      <button onClick={()=> {navigate('/')}}>Back to products</button>
      <div className="single-product-card">
      <h1>{singleData.title}</h1>
      <img src={singleData.thumbnail} alt={singleData.title} />
      <p>{singleData.description}</p>
      <div className="single-product-price-rating">
      <p className='single-product-price'>{singleData.price} $</p>

      <p>
      <Rating name="read-only" value={singleData.rating} readOnly />
        </p>
      </div>
      <p>{singleData.brand}</p>
      </div>
    </div>
  )
}

export default SingleProduct
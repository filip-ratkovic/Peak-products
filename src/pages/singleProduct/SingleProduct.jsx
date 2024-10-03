import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router'

const SingleProduct = () => {
  const params = useParams();
  console.log(params.id)

  const fetchSingleData = () => {
    fetch(`https://dummyjson.com/products/${params.id}`)
.then(res => res.json())
.then(res => console.log(res));
  }

  useEffect(()=> {
    fetchSingleData()
  },[])


  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct
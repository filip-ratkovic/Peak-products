import React, { useEffect, useState } from 'react'
import Layout from '../../containers/Layout'

const Home = () => {
  const [allProducts, setAllProducts] = useState('')

useEffect(()=> {
  fetch('https://dummyjson.com/products?limit=30&skip=30&select=title,price,images')
  .then(res => res.json())
  .then((data) => {
    setAllProducts(data)
  });
},[])
console.log(allProducts.products)
  return (
    <Layout>
      <div className="clssa">
        {allProducts.products.map((product)=> {
       return (
        <div> 
             <h1>{product.title}</h1>
             <p>{product.price}</p>
             <img src={product.images[0]} alt={product.title} style={{width:"100px"}}/>
        </div>
       )
        })}
      </div>
    </Layout>
  )
}

export default Home
import React, { useEffect, useState } from "react";
import Layout from "../../containers/Layout";

import "./home.css";
import Search from "../../components/search/Search";
import { useNavigate } from "react-router";

const Home = () => {
  const [allProducts, setAllProducts] = useState("");

  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://dummyjson.com/products/search?q=phone')
    .then(res => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, []);

  return (
    <Layout>
      <main className="home-main">
        <section className="home-search-section">
          <Search />
        </section>

        <section className="home-products-section">
        {allProducts.products?.map((product)=> {
       return (
        <div className="home-product-cont"> 
             <h1>{product.title}</h1>
             <p>{product.price}</p>
             <img src={product.images[0]} alt={product.title} style={{width:"100px"}}/>
             <button style={{cursor:"pointer"}} onClick={()=> navigate(`/products/${product.title}`)}>Learn more /</button>
        </div>
       )
        })}
        </section>
        <section className="home-pagination-section">
          paginacija
        </section>
      </main>
    </Layout>
  );
};

export default Home;

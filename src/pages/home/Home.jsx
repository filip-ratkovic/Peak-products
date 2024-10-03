import React, { useEffect, useState } from "react";
import Layout from "../../containers/Layout";

import "./home.css";
import Search from "../../components/search/Search";
import { useLocation, useNavigate } from "react-router";
import Pagination from "../../components/pagination/Pagination";
import { useSelector } from "react-redux";

const Home = () => {
  const [allProducts, setAllProducts] = useState("");
  const [pageNum, setPageNum] = useState(0)
  const [searchInput, setSearchInput] = useState('');
  const searchState = useSelector((state) => state.search);



  const navigate = useNavigate();

  const handleNext = () => {
    if(pageNum === (allProducts.total/10)) {
            
    } else {
      setPageNum(pageNum+1)
    }
    fetchData()
  }

  const handlePrevious = () => {
    if(pageNum === 0) {
            
    } else {
      setPageNum(pageNum-1)
    }
    fetchData()
  }

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const fetchSearchData = () => {
    fetch(`https://dummyjson.com/products/search?q=${searchState.searchInput}`)
    .then((res) => res.json())
    .then((data) => {
      setAllProducts(data);
    });
  }

  const fetchData = () => {
    fetch(`https://dummyjson.com/products?limit=10&skip=${10*pageNum}&select=title,price,images`)
    .then((res) => res.json())
    .then((data) => {
      setAllProducts(data);

    });
  }
  useEffect(() => {
    fetchSearchData()
  }, [searchState]);

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <Layout>
      <main className="home-main">
        <section className="home-search-section">
          <Search />
        </section>

        <section className="home-products-section">
          {allProducts.products?.map((product) => {
            return (
              <div className="home-product-cont">
                <h1>{product.title}</h1>
                <p>{product.price}</p>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  style={{ width: "100px" }}
                />
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  Learn more /
                </button>
              </div>
            );
          })}
        </section>
        <section className="home-pagination-section">
          <button onClick={handlePrevious}>PREVIOUS</button>
          <button onClick={handleNext}>NEXT</button>
        </section>
      </main>
    </Layout>
  );
};

export default Home;

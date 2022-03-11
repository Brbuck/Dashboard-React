import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

import Layout from "../../components/Layout";
import { VscEdit } from "react-icons/vsc";
import { AiTwotoneDelete } from "react-icons/ai";


function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/produtos")
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);


  return (
    <Layout>
      <div className="products-container">
        <h1>Products list</h1>
        <div className="header">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <div className="options">
            <span>edit</span>
            <span>delete</span>
          </div>
        </div>
        {product.map((item, index) => (
          <div className="row" key={index}>
            <span>{item?.description_product}</span>
            <span>{item?.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            <span>{item?.stock}</span>
            <div className="options">
              <span className="edit">
                <Link to={`/edit-product/${item?._id}`}><VscEdit /></Link>
              </span>
              <span className="delete">
              <Link to={`/delete-product/${item?._id}`}><AiTwotoneDelete  /></Link>
              </span>
            </div>
          </div>
          
        ))}
        
      </div>
    </Layout>
  );
}

export default Products;


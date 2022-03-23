import React, { useState, useEffect } from "react";
import "./styles.scss";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { api } from "../../services/api";
import { soNumero } from "../../Utils";

import Layout from "../../components/Layout";
import Message from "../../Components/Message";

function AddProducts() {
  let navigate = useNavigate();

  const [status, setStatus] = useState({
    type: "",
    msg: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus(!status);
    }, 4000);

    return () => clearTimeout(timer);
  }, [status]);

  const { register, handleSubmit } = useForm();

  async function createProduct({
    name_product,
    description_product,
    price,
    stock,
  }) {
    try {
      await api
        .post("/produto", { name_product, description_product, price, stock })
        .then((response) =>
          setStatus({
            type: "success",
            msg: response.data.msg,
          })
        );
    } catch (error) {
      if (error.response) {
        setStatus({
          type: "error",
          msg: error.response.data.msg,
        });
      }
    }
  }
  return (
    <>
      <Message msg={status.msg} type={status.type} />
      <Layout>
        <div className="form-products">
          <h1>Add New Product</h1>
          <form onSubmit={handleSubmit(createProduct)}>
            <input
              type="text"
              {...register("name_product")}
              placeholder="Title"
            />
            <textarea
              type="text"
              {...register("description_product")}
              placeholder="Description"
            />
            <input type="text" {...register("price")} placeholder="Price" />
            <input
              type="text"
              {...register("stock")}
              placeholder="Stock"
              onKeyUp={soNumero}
            />
            <button
              type="submit"
              onClick={() => {
                setTimeout(() => {
                  navigate("/products");
                }, 4000);
              }}
            >
              Enviar
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default AddProducts;

import React, { useState, useEffect } from "react";
import "./styles.scss";

import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { api } from "../../services/api";
import { soNumero } from "../../Utils";

import Layout from "../../components/Layout";
import Message from "../../Components/Message";

function EditProduct() {
  const { id } = useParams();
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

  const [modal, setModal] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/produto-details/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setModal(data);
      });
  }, [id]);

  const { register, handleSubmit } = useForm();

  async function putProcuct({
    name_product,
    description_product,
    price,
    stock,
  }) {
    try {
      await api
        .put(`/produto/${id}`, {
          name_product,
          description_product,
          price,
          stock,
        })
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
        <div className="wrapper">
          <form onSubmit={handleSubmit(putProcuct)} className="form-put">
            <input
              type="text"
              {...register("name_product")}
              placeholder="title"
              defaultValue={modal?.name_product}
              autoFocus
            />
            <textarea
              type="text"
              {...register("description_product")}
              placeholder="Description"
              defaultValue={modal?.description_product}
            />
            <input
              type="text"
              {...register("price")}
              placeholder="Price"
              defaultValue={modal?.price}
            />
            <input
              type="text"
              {...register("stock")}
              placeholder="Stock"
              defaultValue={modal?.stock}
              onKeyUp={soNumero}
            />
            <div className="buttons">
              <button
                type="submit"
                onClick={() => {
                  setTimeout(() => {
                    navigate("/products");
                  }, 4000);
                }}
              >
                Confirm
              </button>
              <button
                type="button"
                onClick={() => {
                  navigate("/products");
                }}
              >
                &#8592; back
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default EditProduct;

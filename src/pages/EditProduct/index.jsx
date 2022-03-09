import React, { useState, useEffect } from "react";
import "./styles.scss";

import Layout from "../../components/Layout";
import {api} from "../../services/api";
import {soNumero} from '../../Utils'
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function EditProduct() {
  const [modal, setModal] = useState([]);

  let navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/produto-details/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setModal(data);
      });
  }, [id]);

  const { register, handleSubmit } = useForm();

  async function putProcuct({ name_product, description_product, price, stock  }) {
    await api.put(`/produto/${id}`, {
        name_product, description_product, price, stock
    })
    navigate('/products')
}

  return (
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
            placeholder="title"
            defaultValue={modal?.description_product}
          />
          <input
            type="text"
            className="date"
            {...register("price")}
            defaultValue={modal?.price}
          />
          <input
            type="text"
            {...register("stock")}
            placeholder="title"
            defaultValue={modal?.stock}
            onKeyUp={soNumero}
          />
           <div className="buttons">
            <button type="submit">Confirm</button>
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
  );
}

export default EditProduct;

import React, { useState, useEffect } from "react";
import "./styles.scss";

import Layout from "../../components/Layout";
import {api} from "../../services/api";
import {soNumero} from '../../Utils'
import { Link, useParams, useNavigate } from "react-router-dom";
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

  async function putProcuct({ name_product, description_product, price_product, qt_product  }) {
    await api.put(`/produto/${id}`, {
        name_product, description_product, price_product, qt_product
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
            {...register("price_product")}
            defaultValue={modal?.price_product}
            onKeyUp={soNumero}
          />
          <input
            type="text"
            {...register("qt_product")}
            placeholder="title"
            defaultValue={modal?.qt_product}
            onKeyUp={soNumero}
          />
          <button type="submit">Confirm</button>
          <Link to="/products"> &#8592; back</Link>
        </form>
      </div>
    </Layout>
  );
}

export default EditProduct;

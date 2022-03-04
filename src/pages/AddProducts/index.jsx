import React from "react";
import "./styles.scss";

import Layout from "../../components/Layout";
import { api } from "../../services/api";
import { soNumero} from "../../Utils";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function AddProducts() {
  let navigate = useNavigate();

  const { register, handleSubmit } = useForm();

    async function createUser({ name_product, description_product, price_product, qt_product }) {
    try {
      await api.post("/produto", { name_product, description_product, price_product, qt_product });
      navigate("/products")
     
    } catch (error) {
      alert(error.response.data.error);
    }
  }
  return (
    <Layout>
      <div className="form-products">
        <h1>Add New Product</h1>
        <form onSubmit={handleSubmit(createUser)}>
        <input type="text" {...register("name_product")} placeholder="Title" />
        <textarea type="text" {...register("description_product")} placeholder="Description" />
        <input
          type="text"
          {...register("price_product")}
          placeholder="Price"
          onKeyUp={soNumero}
        />
         <input
          type="text"
          {...register("qt_product")}
          placeholder="Stock"
          onKeyUp={soNumero}
         
        />
        <button type="submit">Enviar</button>
      </form>
      </div>
    </Layout>
  );
}

export default AddProducts;

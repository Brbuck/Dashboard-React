import React from "react";
import "./styles.scss";

import Layout from "../../components/Layout";

import { Link } from "react-router-dom";
import { MdReportProblem } from "react-icons/md";

function NotFound() {
  return (
    <Layout>
      <div className='notFound-content'>
          <span><MdReportProblem /></span>
        <h1>404</h1>
        <p>Sorry, the page not found</p>
        <p>
          The link you followed is not available or the page has been removed
        </p>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  );
}

export default NotFound;

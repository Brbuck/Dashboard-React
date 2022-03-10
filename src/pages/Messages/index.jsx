import React, { useState, useEffect } from "react";
import "./styles.scss";

import axios from "axios";
import Layout from "../../Components/Layout";

function Messages() {
  const [messages, setMessages] = useState([]);
  console.log(messages);

  useEffect(() => {
    axios
      .get("https://random-data-api.com/api/company/random_company?size=30")
      .then(res  => {setMessages(res.data)});
  }, []);
  return (
    <Layout>
      <div className='messages'>
         <h1>Messages</h1>
         {
              messages.map((item, index) => (
                <div  className="row" key={index}>
                <span>
                  <img src={item?.logo} alt={item?.business_name} />
                </span>
                <div>
                  <span>
                    <strong>
                      {item?.business_name} 
                    </strong>
                  </span>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                  <span>01/01/2022</span>
                </div>
              </div>
              ))
          }
      </div>
    </Layout>
  );
}

export default Messages;

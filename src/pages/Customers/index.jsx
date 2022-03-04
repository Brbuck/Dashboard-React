import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";

import "./styles.scss";

function Login() {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");

  const lowerSearch = search.toLowerCase();
  const filterUser = user?.filter((item) =>
    item.first_name.toLowerCase().includes(lowerSearch)
  );

  filterUser.sort( function (x, y) {
    let a = x.first_name.toUpperCase(),
        b = y.first_name.toUpperCase();
        return  a === b ? 0 : a > b ? 1 : -1;
})

  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=80")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <Layout>
      <div className="customers">
        <div className="search">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
        </div>
        {filterUser.map((item, index) => (
          <div className="list" key={index}>
            <span>
              <img src={item?.avatar} alt={item?.first_name} />
            </span>
            <div>
              <p>
                <strong>
                  {item?.first_name} {item?.last_name}
                </strong>
              </p>
              <p>{item?.employment?.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Login;

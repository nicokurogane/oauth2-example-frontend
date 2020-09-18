import React from "react";
import { getAuthorize } from "../../api/apiClient";

const Home = () => {
  const handleAuthorization = () => {
    getAuthorize()
      .then((response) => {
        const { data } = response;
        window.location.href = data.url;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="home-container">
      Home container
      <button onClick={handleAuthorization}>start flow</button>
    </div>
  );
};

export default Home;

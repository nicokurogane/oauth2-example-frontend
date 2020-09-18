import React from "react";
import { getAuthorize } from "../../api/apiClient";
import "./home.css";
import outlookLogo from "../../assets/images/outlook-logo.png";

const Home = () => {
  const handleAuthorization = () => {
    getAuthorize()
      .then((response) => {
        const { data } = response;
        window.location.href = data.url;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="home-container">
      <div className="header">My Profile Viewer</div>
      <div className="content">
        <div className="card">
          <h2>¡Bienvenido!</h2>

          <p>Para probar el flujo de autorización da click en el botón: </p>
          <button onClick={handleAuthorization} className="auth-button">
            <img src={outlookLogo} className="auth-logo" alt="outlook"></img>
            Ingresar con Outlook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

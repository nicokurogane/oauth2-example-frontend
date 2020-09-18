import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { getAccessToken } from "../../api/apiClient";
import { history } from "../app/App";
import { saveAccessToken } from "../../utils/storage/storage";
import loadingImage from "../../assets/images/loading.gif";
import errorImage from "../../assets/images/error.svg";
import redirectImage from "../../assets/images/enter.svg";
import "./callback.css";

const Callback = () => {
  const [loading, setLoading] = useState(true);
  const [authSuccedded, setAuthSuccedded] = useState(false);
  let query = new URLSearchParams(useLocation().search);

  const getAccesTokenFromServer = () => {
    const code = query.get("code");
    const state = query.get("state");
    getAccessToken(code, state)
      .then((response) => {
        const { access_token } = response.data;
        saveAccessToken(access_token);
        setLoading(false);
        setAuthSuccedded(true);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  useEffect(() => {
    getAccesTokenFromServer();
  }, []);

  useEffect(() => {
    if (authSuccedded) {
      //para efectos demostrativos se puso la redireccion despues de 5 segundos:
      setTimeout(() => {
        history.push("/profile");
      }, 5000);
    }
  }, [authSuccedded]);

  if (loading) {
    return (
      <div className="callback-container">
        <div className="content">
          <img src={loadingImage} alt="loading" className="loading-img"></img>
          <span>Cargando...</span>;
        </div>
      </div>
    );
  } else if (!loading && authSuccedded) {
    return (
      <div className="callback-container">
        <div className="content">
          <img src={redirectImage} alt="loading" className="loading-img"></img>
          <span>Redirigiendo...</span>;
        </div>
      </div>
    );
  } else {
    return (
      <div className="callback-container">
        <div className="content">
          <img src={errorImage} alt="loading" className="loading-img"></img>
          <span>Ocurrio un error con su autenticacion </span>
          <Link to="/" className="back-link">
            Regresar
          </Link>
        </div>
      </div>
    );
  }
};

export default Callback;

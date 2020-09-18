import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { getAccessToken } from "../../api/apiClient";
import { history } from "../app/App";
import { saveAccessToken, saveTokenType } from "../../utils/storage/storage";

const Callback = () => {
  const [loading, setLoading] = useState(true);
  const [authSuccedded, setAuthSuccedded] = useState(false);
  const [error, setError] = useState(false);
  let query = new URLSearchParams(useLocation().search);

  const getAccesTokenFromServer = () => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const code = query.get("code");
    const state = query.get("state");
    getAccessToken(code, state)
      .then((response) => {
        const { access_token, token_type } = response.data;
        //console.log(response.data);
        saveTokenType(token_type);
        saveAccessToken(access_token);
        setLoading(false);
        setAuthSuccedded(true);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.log(error);
      });
  };

  useEffect(() => {
    getAccesTokenFromServer();
  }, []);

  useEffect(() => {
    if (authSuccedded) {
      history.push("/profile");
    }
  }, [authSuccedded]);

  if (loading) {
    return <span>Cargando...</span>;
  } else if (!loading && error) {
    return <span>Ocurrio un error con su autenticacion: </span>;
  } else if (!loading && authSuccedded) {
    return <span>Redirigiendo: </span>;
  } else {
    return <span></span>;
  }
};

export default Callback;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAccessToken } from "../../api/apiClient";

const Callback = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  let query = new URLSearchParams(useLocation().search);

  const getAccesTokenFromServer = () => {
    const code = query.get("code");
    const state = query.get("state");
    getAccessToken(code, state)
      .then((response) => {
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    getAccesTokenFromServer();
  });

  if (loading) {
    return <span>Cargando...</span>;
  } else if (!loading && error) {
    return <span>Ocurrio un error con su authenticacion: </span>;
  }
};

export default Callback;

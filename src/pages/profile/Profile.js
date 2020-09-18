import React, { useState, useEffect } from "react";
import { getUserProfile } from "../../api/apiClient";
import ProfileViewer from "../../components/profileViewer/ProfileViewer";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserProfile().then((response) => {
      setUserData(response.data);
      setLoading(false);
      setDataLoaded(true);
    });
  }, []);

  if (loading) {
    return <span>Cargando Perfil</span>;
  } else if (!loading && dataLoaded) {
    return (
      <>
        <span>Perfil Cargado</span>
        <ProfileViewer data={userData} />
      </>
    );
  } else {
    return <span>error Cargado perfil</span>;
  }
};

export default Profile;

import React, { useState, useEffect } from "react";
import { getUserProfile } from "../../api/apiClient";
import ProfileViewer from "../../components/profileViewer/ProfileViewer";
import loadingImage from "../../assets/images/loading.gif";
import errorImage from "../../assets/images/error.svg";

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
    return (
      <div className="profile-container">
        <div className="content">
          <img src={loadingImage} alt="loading" className="loading-img"></img>
          <span>Cargando Perfil...</span>;
        </div>
      </div>
    );
  } else if (!loading && dataLoaded) {
    return (
      <>
        <div className="profile-container">
          <div className="header">¡Bienvenido a tu perfil!</div>
          <div className="content">
            <div className="card">
              <ProfileViewer data={userData} />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="profile-container">
        <div className="content">
          <img src={errorImage} alt="loading" className="loading-img"></img>
          <span>Error cargando el perfil...</span>;
        </div>
      </div>
    );
  }
};

export default Profile;

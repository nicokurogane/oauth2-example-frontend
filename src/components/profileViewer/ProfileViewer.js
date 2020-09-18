import React from "react";
import "./profile-viewer.css";

const ProfileViewer = (props) => {
  const { displayName, jobTitle, userPrincipalName, mobilePhone } = props.data;
  return (
    <div className="profile-viewer-container">
      <h2>Tu Perfil</h2>
      <div className="row">
        <span className="title">Nombre: </span>
        <span className="data">{displayName} </span>
      </div>
      <div className="row">
        <span className="title">Puesto: </span>
        <span className="data">{jobTitle} </span>
      </div>
      <div className="row">
        <span className="title">Email: </span>
        <span className="data">{userPrincipalName} </span>
      </div>
      <div className="row">
        <span className="title">Celular: </span>
        <span className="data">{mobilePhone} </span>
      </div>
    </div>
  );
};

export default ProfileViewer;

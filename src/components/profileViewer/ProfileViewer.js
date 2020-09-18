import React from "react";
import "./profile-viewer.css";

const ProfileViewer = (props) => {
  const { displayName, jobTitle, userPrincipalName, mobilePhone } = props.data;
  /*businessPhones: []
  displayName: "Nicolas Martinez"
  givenName: "Nicolas"
  id: "5d938d06-8b6d-4111-b749-01b3b058392d"
  jobTitle: "React Developer"
  mail: null
  mobilePhone: "78604365"
  officeLocation: null
  preferredLanguage: null
  surname: "Martinez"
  userPrincipalName: "nmartinez@applaudostudios.com"*/
  return (
    <div className="profile-viewer-container">
      <div className="row">
        <span className="title">Nombre: </span>
        <span className="data">{displayName} </span>
      </div>
      <div className="row">
        <span className="title">Puesto: </span>
        <span className="data">{jobTitle} </span>
      </div>
      <div className="row">
        <span className="title">email: </span>
        <span className="data">{userPrincipalName} </span>
      </div>
      <div className="row">
        <span className="title">Nombre: </span>
        <span className="data">{mobilePhone} </span>
      </div>
    </div>
  );
};

export default ProfileViewer;

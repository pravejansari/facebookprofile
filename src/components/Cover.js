import React from "react";
import "./Cover.css";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import Navbar from "./Navbar";

export const Cover = () => {
  return (
    <div className="cover-container">
      <img
        src="/images/pravej6.jpg.jpg"
        alt=""
        className="coverImg"
      />
      <img
        src="/images/pravej3.jpg.jpg"
        alt=""
        className="profileImg"
      />
      <div className="addProfileImg">
        <CameraAltIcon />
      </div>
      <div className="editCoverImg">
        <CameraAltIcon />
        <p>Edit Cover Photo</p>
      </div>
      <div className="userTitle">
        <h1>Pravej Ansari</h1>
        <p>Software Developer</p>
        <p className="edit">Edit</p>
      </div>
      <Navbar />
    </div>
  );
};

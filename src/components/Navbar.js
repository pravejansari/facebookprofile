import React from "react";
import "./Navbar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftNav">
        <div className="navbarOption">
          <h5>Posts</h5>
        </div>
        <div className="navbarOption">
          <h5>About</h5>
        </div>
        <div className="navbarOption">
          <h5>Friends</h5>
        </div>
        <div className="navbarOption">
          <h5>Photos</h5>
        </div>
        <div className="navbarOption">
          <h5>Videos</h5>
        </div>
        <div className="navbarOption">
          <h5>Check-ins</h5>
        </div>
        <div className="navbarOption">
          <h5>More</h5>
          <ExpandMoreIcon />
        </div>
      </div>

      <div className="rightNav">
        <div className="addToStory">
          <AddIcon />
          <h5>Add to Story</h5>
        </div>
        <div className="editProfile">
          <CreateIcon />
          <h5>Edit Profile</h5>
        </div>
        <div className="more">
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

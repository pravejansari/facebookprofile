import React from "react";
import "./Content.css";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import FlagIcon from "@material-ui/icons/Flag";
import Post from "./Post";
import Friend from "./Friend";

import TuneIcon from "@material-ui/icons/Tune";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import DashboardSharpIcon from "@material-ui/icons/DashboardSharp";

function Content() {
  return (
    <div className="main-container">
      {/* LeftSide Container */}
      <div className="leftContainer">
        <div className="intro">
          <h2>Intro</h2>
          <div className="introItem">
            <HomeIcon />
            <p>Lives in Noida</p>
          </div>
          <div className="introItem">
            <FavoriteIcon />
            <p>Single</p>
          </div>
          <div className="introItem">
            <HomeIcon />
            <p>Lives in Noida</p>
          </div>
          <div className="introItem">
            <AccessTimeIcon />
            <p>Joined on March 2017</p>
          </div>
          <div className="introItem">
            <RssFeedIcon />
            <p>Followed by 200 People</p>
          </div>
          <div className="editDetails">
            <h4>Edit details</h4>
          </div>
          <div className="hobbies">
            <button>🚀 Learn to code</button>
            <button>💻 coding</button>
            <button>🏏Cricket</button>
            <button>🏏Cricket</button>
            <button>🏏Cricket</button>
            <button>🚶‍Hiking</button>
            <button>🧳Travelling</button>
          </div>
          <div className="editHobbies">
            <h4>Edit hobbies</h4>
          </div>
        </div>
        <div className="photosContainer">
          <div className="photoHeading">
            <h3>Photos</h3>
            <p>See All Photos</p>
          </div>
          <div className="imgCollection">
            <img
              src="/images/pravej1.jpg.jpeg"
              alt=""
            />
            <img
              src="/images/pravej2.jpg.jpeg"
              alt=""
            />
            <img
              src="/images/pravej3.jpg.jpg"
              alt=""
            />
            <img
              src="/images/pravej1.jpg.jpeg"
              alt=""
            />
            <img
              src="/images/pravej2.jpg.jpeg"
              alt=""
            />
            <img
              src="/images/pravej3.jpg.jpg"
              alt=""
            />
            <img
              src="/images/pravej1.jpg.jpeg"
              alt=""
            />
            <img
              src="/images/pravej2.jpg.jpeg"
              alt=""
            />
            <img
              src="/images/pravej3.jpg.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="friendContainer">
          <div className="friendHeader">
            <div className="left-friendHeader">
              <h3>Friends</h3>
              <p>1,123 friends</p>
            </div>
            <div className="right-friendHeader">
              <p>See All Friends</p>
            </div>
          </div>
          <div className="friendContent">
            <div className="firstRow">
              <Friend
                image="/images/imran.jpg.jpg"
                name="Imran ansari"
              />
              <Friend
                image="/images/manan.jpg.jpg"
                name="Manan ansari"
              />
              <Friend
                image="/images/firoj.jpg.jpg"
                name="Firoj ali"
              />
            </div>
            <div className="secondRow">
              <Friend
                image="/images/sikandar.jpg.jpg"
                name="Sikandar ansari"
              />
              <Friend
                image="/images/kartik.jpg.jpg"
                name="Kartik prajapati"
              />
              <Friend
                image="/images/afrealam.jpg.jpg"
                name="Afre alam"
              />
            </div>
            <div className="thirdRow">
              <Friend
                image="/images/akshad.jpg.jpg"
                name="Akshad ansari"
              />
              <Friend
                image="/images/rishab.jpg.jpg"
                name="Rishab kumar"
              />
              <Friend
                image="/images/deepak.jpg.jpg"
                name="Deepak kumar"
              />
            </div>
          </div>
        </div>
      </div>

      {/* RightSide container */}
      <div className="rightContainer">
        <div className="createPost">
          <div className="newPost">
            <img
              src="/images/pravej7.jpg.jpg"
              alt=""
            />
            <input type="text" placeholder="What's on your mind?" />
          </div>
          <div className="upload">
            <div className="uploadOption liveIcon">
              <VideoCallIcon />
              <h5>Live video</h5>
            </div>
            <div className="uploadOption photo-video">
              <PhotoLibraryIcon />
              <h5>Photo/Video</h5>
            </div>
            <div className="uploadOption lifeEvent">
              <FlagIcon />
              <h5>Life Events</h5>
            </div>
          </div>
        </div>

        <div className="postViewContainer">
          <div className="postViewHeading">
            <div className="postViewLeft">
              <h3>Posts</h3>
            </div>
            <div className="postViewRight">
              <div className="postFilter">
                <TuneIcon fontSize="small" />
                <p>Filters</p>
              </div>
              <div className="managePost">
                <SettingsIcon fontSize="small" />
                <p>Manage posts</p>
              </div>
            </div>
          </div>
          <div className="postViewMethod">
            <div className="listView">
              <MenuIcon fontSize="small" />
              <p>List view</p>
            </div>
            <div className="gridView">
              <DashboardSharpIcon fontSize="small" />
              <p>Grid view</p>
            </div>
          </div>
        </div>

        <Post
          img={
            "/images/pravej6.jpg.jpg"
          }
          like="50"
          comment="15"
        />
        <Post
          img="/images/pravej6.jpg.jpg"
          like="70"
          comment="12"
        />
        <Post
          img={
            "/images/pravej6.jpg.jpg"
          }
          like="200"
          comment="20"
        />
      </div>
    </div>
  );
}

export default Content;

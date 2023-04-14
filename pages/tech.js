import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import TechPills from "pages-sections/Components-Sections/TechPills.js";
import YouTube from "react-youtube"


import SuspensionBoard from "assets/img/suspension-diamond-quad-bottom.jpg"

import styles from "assets/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const opts = {
    height: '320',
    width: '420',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,
    },
  };
  return (
    <div>
      <Header
        color="white"
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed

        {...rest}
      />
      <div className={classNames(classes.main)}>
        <p style={{ align: "center" }}>
          <img src={SuspensionBoard} alt="Suspension Board" style={{ width: "70%", display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "70px", paddingTop: "75px" }} />
        </p>
        <TechPills />
        <span className="video">
          <YouTube videoId='XjCz_40wXN0' opts={opts} />
        </span>
        <span className="video">
          <YouTube videoId='NTITDQOKepI' opts={opts} />
        </span>
      </div>
      <Footer />
      <style jsx>{` 
        .video {
            // width: 640px;
            margin: 0 5%;
            display: block;
            padding-top: 5px;
            margin-left: 10%;
            margin-right: 10%;
            text-align: center;
        },

      `}</style>
    </div>
  );
}

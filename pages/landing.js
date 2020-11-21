import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Image from 'next/image'

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import Profile from "public/img/vernor_profile.jpg";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        routes={dashboardRoutes}
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      {/* <Parallax responsive image={require("public/img/tube.jpg")}> */}
        <div>
        <div className={`content ${classes.container}`}>
          <GridContainer style={{ marginLeft: "15px" }}>
          <GridItem xs={12} sm={12} md={6}>
              <img
                // className="profile"
                src={Profile}
                alt="Profile image"
                height="400px"
                width="350px"
              />
            </GridItem>

            <GridItem xs={12} sm={12} md={6} >
              {/* <div className="blurb"> */}
              <h1 style={{ color: "black" }} className={classes.title}>High performance surfboards made in Santa Cruz, C</h1>
              <h4 style={{ justifyContent: "right" }}>
                <strong>From beginner to professional, Vernor Surfboards has a wide range of boards to choose from.</strong>
              </h4>
              <br />
              {/* </div> */}
             
              {/* <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=OM6Ln27qjCs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button> */}
            </GridItem>
           
          </GridContainer>
        </div>
      {/* </Parallax> */}

      
    </div>
    <Footer className="footer"/>
    <style jsx>{`
      .footer {
        width: 100%;
        align-items: center;
      }
      .blurb {
        margin: auto;
      }

      .content {
        margin-top: 115px;
        padding-left: 0px;
        color: black;
      }

      @media (min-width: 980px) {
        
        .profile {
          height: 60%;
        }
        .blurb {
          padding-top 200px;
        }

        .content {
          margin-top: 130px;
        }
      
      }

    `}</style>
    </div>
  );
}

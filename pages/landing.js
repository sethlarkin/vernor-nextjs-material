import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Image from 'next/image'

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import Profile from "assets/img/vernor_profile.jpg";

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
      <div>
        <div style={{ color: "black", marginTop: "115px" }} className={classes.container}>
          <GridContainer style={{ marginLeft: "15px" }}>
            <GridItem xs={12} sm={12} md={6}>
              <Image
                src={Profile}
                alt="Picture of the shaper"
                width={350}
                height={400}
              ></Image>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} >
              <div className="blurb">
                <h1 style={{ color: "black" }} className={classes.title}>High performance surfboards made in the USA</h1>
                <h4 style={{ justifyContent: "right" }}>
                  <strong>From beginner to professional, Vernor Surfboards has a wide range of boards to choose from.</strong>
                </h4>
                <br />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer className="footer" />
      <style jsx>{`
      .footer {
        width: 100%;
        align-items: center;
      }
      .blurb {
        margin: auto;
      }
      @media (min-width: 980px) {
        .profile {
          height: 60%;
        }
      }
    `}</style>
    </div>
  );
}

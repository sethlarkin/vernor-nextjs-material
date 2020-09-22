import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

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
      <Parallax  responsive image={require("public/img/tube.jpg")}>
        <div style={{color: "black", display: "flex", justifyContent: "left"}} className={classes.container}>
          <GridContainer style={{marginLeft: "15px"}}>
            <GridItem xs={12} sm={12} md={6}>
              <h1 style={{color: "black"}} className={classes.title}>Your Surf Story Starts With Us.</h1>
              <h4 style={{justifyContent: "right"}}>
              <strong>From beginner to professional, Vernor Surfboards has a wide range of boards to choose from.</strong>
              </h4>
              <br />
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
      </Parallax>
     
      <Footer />
    </div>
  );
}

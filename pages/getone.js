import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import ShopCard from "components/ShopCard"

import { getBoardData } from '../lib/board-data'

import profilePageStyles from "assets/jss/nextjs-material-kit/pages/profilePage.js";
import { cardTitle } from "assets/jss/nextjs-material-kit.js";

import shopData from "../lib/shops.json"

const styles = {
  ...profilePageStyles,
  cardTitle,
}

const useStyles = makeStyles(styles);

export default function ProfilePage({ props, allBoardsData }) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
        <div 
        style={{marginTop: "72px"}}

        >
          <h3 style={{textAlign:"center"}}><strong>Vernor surfboards are available at these fine retailers</strong></h3>
          
          <div className={classes.container}>
            {shopData.shops.map(shop => (
              <React.Fragment>
                <strong><h3>{shop.state}</h3></strong>
                <GridContainer
                  container
                  direction="row"
                  justify="left"
                  alignItems="center"
                >
                  {shop.locations.map(info => (
                    <ShopCard
                      item
                      name={info.name}
                      address={info.address}
                      phone={info.phone}
                      site={info.site}
                    />
                  ))}
                </GridContainer>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export async function getStaticProps() {
  const allBoardsData = getBoardData()
  return {
    props: {
      allBoardsData
    }
  }
}
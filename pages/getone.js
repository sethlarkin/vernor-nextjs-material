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
        color="transparent"
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />

      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <GridContainer
            container
            spacing={1}
            justify="left"
            alignItems="center"
          >
            <div style={{flexDirection:"row"}}>
              <h3>California</h3>
              {shopData.shops.california.map(shop => (
                <ShopCard
                  name={shop.name}
                  address={shop.address}
                  phone={shop.phone}
                  site={shop.site}
                />
              ))}
            </div>
            <div>
              <h3>Maryland</h3>
              {shopData.shops.maryland.map(shop => (
                <ShopCard
                  name={shop.name}
                  address={shop.address}
                  phone={shop.phone}
                  site={shop.site}
                />
              ))}
            </div>
            <div>
              <h3>North Carolina</h3>
              {shopData.shops.north_carolina.map(shop => (
                <ShopCard
                  name={shop.name}
                  address={shop.address}
                  phone={shop.phone}
                  site={shop.site}
                />
              ))}
            </div>
            <div>
              <h3>South Carolina</h3>
              {shopData.shops.south_carolina.map(shop => (
                <ShopCard
                  name={shop.name}
                  address={shop.address}
                  phone={shop.phone}
                  site={shop.site}
                />
              ))}
            </div>
            <div>
              <h3>Texas</h3>
              {shopData.shops.texas.map(shop => (
                <ShopCard
                  name={shop.name}
                  address={shop.address}
                  phone={shop.phone}
                  site={shop.site}
                />
              ))}
            </div>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
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
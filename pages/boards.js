import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import BoardCard from "components/BoardCard"

import { getBoardData } from '../lib/board-data'

import profilePageStyles from "assets/jss/nextjs-material-kit/pages/profilePage.js";
import { cardTitle } from "assets/jss/nextjs-material-kit.js";

import boardData from "../lib/boards.json"

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
          style={{ marginTop: "25px", paddingTop: "75px" }}
        >
          <div className={classes.container}>
            <GridContainer
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {boardData.boards.map(board => (
                <div key={board.id}>
                  <BoardCard
                    name={board.name}
                    logo={board.logo}
                    dims={board.dims}
                    image={board.img}
                    description={board.description}
                    dims={board.dims}
                  />
                </div>
              ))}
            </GridContainer>
          </div>
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
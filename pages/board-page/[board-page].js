import React from "react";
import { useRouter } from 'next/router';
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


import profilePageStyles from "assets/jss/nextjs-material-kit/pages/profilePage.js";
import { cardTitle } from "assets/jss/nextjs-material-kit.js";

import boardData from 'lib/boards.json';

const styles = {
    ...profilePageStyles,
    cardTitle,
}

const useStyles = makeStyles(styles);

export default function BoardPage({ props, allBoardsData }) {
    const router = useRouter();
    const id = router.query['board-page'];

    let boardDetail = {}
    boardData.boards.forEach(element => {
        // console.log(element.name.toLowerCase())
        // console.log("id: " + id);
        if (element.name.toLowerCase().includes(id)) {
            // console.log(element.name.toLowerCase().includes(id) + ' ' + typeof (element.name));
            boardDetail = element;
            // console.log("boardDetail" + ' ' + JSON.stringify(boardDetail));

        }
    });

    console.log("boardDetail.image " + boardDetail.img);

    if (JSON.stringify(boardDetail) === JSON.stringify({})) {
        // router.push('/')
    }

    // boardData.boards
    // console.log("sasds" + boardData.boards[0].name);

    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    console.log(`{id}`)
    console.log("router.query: " + router.query['board-page'])

    return (
        <div>
            <div>
                <Header
                    color="white"
                    brand="NextJS Material Kit"
                    rightLinks={<HeaderLinks />}
                    fixed
                    {...rest}
                />
            </div>


            <div className={classNames(classes.main)} style={{ padding: "120px" }}>
                <h3>{boardDetail.name}</h3>
                <img
                    style={{ height: "40%", display: "block", marginLeft: "auto", marginRight: "auto" }}
                    src={boardDetail.img}
                    alt="BarracBoard Imageuda"
                />
                <div>
                    <p><strong>{boardDetail.description}</strong></p>
                    <h6>Size Range: {boardDetail.dims.range}</h6>
                    <h6>Nose: {boardDetail.dims.Nose}</h6>
                    <h6>Middle: {boardDetail.dims.Middle}</h6>
                    <h6>Tail: {boardDetail.dims.Tail}</h6>
                    <h6>Thickness: {boardDetail.dims.Thickness}</h6>
                    <h6>Volume: {boardDetail.dims.Volume}</h6>
                </div>
                
            </div>
        </div >
    );
}

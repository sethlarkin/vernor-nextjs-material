import React from "react";
import { useRouter } from 'next/router';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";


import profilePageStyles from "assets/jss/nextjs-material-kit/pages/profilePage.js";
import { cardTitle } from "assets/jss/nextjs-material-kit.js";

import boardData from 'lib/boards.json';

const styles = {
    ...profilePageStyles,
    cardTitle,
}

const useStyles = makeStyles(styles);

export default function BoardPage({ props, boardData }) {
    const router = useRouter();
    const id = router.query['board-page'];

    let boardDetail = {}
    boardData.boards.forEach(element => {
        if (element.model === id) {
            boardDetail = element;
        }
    });


    const classes = useStyles();
    const { ...rest } = props;

    return (
        <div >
            <div>
                <Header
                    color="white"
                    brand="NextJS Material Kit"
                    rightLinks={<HeaderLinks />}
                    fixed
                    {...rest}
                />
            </div>


            <div className={classNames(classes.main)}>
                <div className='board-container'>
                    <h3>{boardDetail.name}</h3>
                    <img
                        style={{ height: "100px", maxWidth: "20em", display: "block", marginLeft: "auto", marginRight: "auto" }}
                        src={boardDetail.logo}
                        alt="Board Logo"
                    />
                    <img
                        style={{ height: "40%", display: "block", marginLeft: "auto", marginRight: "auto" }}
                        src={boardDetail.img}
                        alt="BarracBoard Imageuda"
                    />
                    <hr />
                    <div >
                        <br />
                        <p><strong>{boardDetail.description}</strong></p>
                        <hr />
                        <h6>Size Range: {boardDetail.dims.range}</h6>
                        <h6>Nose: {boardDetail.dims.Nose}</h6>
                        <h6>Middle: {boardDetail.dims.Middle}</h6>
                        <h6>Tail: {boardDetail.dims.Tail}</h6>
                        <h6>Thickness: {boardDetail.dims.Thickness}</h6>
                        <h6>Volume: {boardDetail.dims.Volume}</h6>
                    </div>
                    <br />
                    <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/fPmplk0aAA8" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                    </div>
                </div>
            </div>
            <style jsx>{`
                h3 {
                    font-weight:bold;
                    text-align:center;
                }
                p {
                    text-align:center;
                }
                .red {
                    color: red;
                }
                .board-container {
                    margin-top: 50px;
                    padding:5px
                }
                @media (min-width: 600px) {
                    .board-container {
                        margin: 100px 5px 5px 0px;

                        min-height: 40%;
                        padding: 5px;
                    }
                    .main {
                        margin-top: 70px;
                    }
                    p {
                        // float:right;
                        text-align:left;
                    }
                    img {
                        float:left;
                        padding-right:20px;
                    }
                }
            `}</style>
            <style global jsx>{`
                // body {
                //     background: black;
                // }
            `}</style>
            <div><Footer /></div>
        </div >
    );
}

export async function getStaticProps() {

    return {
        props: {
            boardData
        },
    }
}

// This function gets called at build time
export async function getStaticPaths() {

    console.log('[board-page] boardData' + boardData)
    // Get the paths we want to pre-render based on posts
    const paths = boardData.boards.map((board) => `/board-page/${board.model}`)

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

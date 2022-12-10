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
import YouTube from "react-youtube"

// import StockDimsTable from 'components/StockDimsTable.js'

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
    const opts = {
        height: '220',
        width: '320',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            // autoplay: 1,
        },
    };



    let boardDetail = {}
    boardData.boards.forEach(element => {
        if (element.model === id) {
            boardDetail = element;
        }
    });
    
    let special = <br />
    if ('special' in boardDetail) {
        special = <h4 style={{fontWeight:'700'}}>{boardDetail.special}</h4>
    }
    
    let video = <br />
    if ('video' in boardDetail) {
        video = <YouTube videoId={boardDetail.video} opts={opts} />
    }


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
                    <div className={"column left"}>
                        <h3>{boardDetail.name}</h3>

                        <img
                            style={{ height: "40%", display: "block", marginLeft: "auto", marginRight: "auto" }}
                            src={boardDetail.img}
                            alt="BarracBoard Imageuda"
                        />
                        <br />
                        <img
                            style={{ height: "100px", maxWidth: "20em", display: "block", marginLeft: "auto", marginRight: "auto" }}
                            src={boardDetail.logo}
                            alt="Board Logo"
                        />
                    </div>

                    <hr />
                    <div className={"column right"}>
                        <span>
                            <div className="row">
                                {special}
                            </div>
                            <br />
                            <p><strong>{boardDetail.description}</strong></p>
                            {boardDetail.description2 ? (<p><strong>{boardDetail.description2}</strong></p>) : (<p></p>)
                }
                            <hr />
                            <h6>Size Range: {boardDetail.dims.range}</h6>
                            <h6>Nose: {boardDetail.dims.Nose}</h6>
                            <h6>Middle: {boardDetail.dims.Middle}</h6>
                            <h6>Tail: {boardDetail.dims.Tail}</h6>
                            <h6>Thickness: {boardDetail.dims.Thickness}</h6>
                            <h6>Volume: {boardDetail.dims.Volume}</h6>
                            <p><strong>--------</strong></p>
                            <h4><strong>Prices:</strong></h4>
                            <h6>Epoxy: ${boardDetail.eps_price}</h6>
                            <h6>Polyester: ${boardDetail.poly_price}</h6>
                            <h6>With suspension: + $60</h6>
                            <h6>Stringerless carbon strip flex deck!!!: + $30 (available in all models)</h6>
                        </span>

                    </div>
                    <br />

                    {/* <div><StockDimsTable className={"column right"} /></div> */}
                    {/* <div>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/fPmplk0aAA8"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div> */}
                </div>
            </div>
            <div className="video row">
                {video}
            </div>
            <div className={"footer"}><Footer /></div>

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
                .video {
                    // width: 640px;
                    // height: 665px;
                    margin: 0 5%;
                    display: block;
                    padding-top: 15px;
                    margin-left: 10%;
                    margin-right: 10%;
                }
                .left {
                    padding-left: 10px;
                    padding-right: 5px;
                  }
                  .right {
                    padding-right: 10px;
                    padding-right: 5px;
                    padding-bottom: 10px;

                  }
                @media (min-width: 840px) {
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
                        // float:left;
                        padding-right:20px;
                    }
                    .column {
                        float: left;
                        max-height:65%;
                      }
                      
                      .left {
                        width: 25%;
                      }
                      .right {
                        width: 75%;

                      }
                      .footer {
                            width: 95%;
                            textAlign: center;
                      }
                      .video {
                        margin: auto;
                        clear: both; 
                        display: flex;
                        justify-content: center;
                        align-items: center;
                }
            `}</style>
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

    // Get the paths we want to pre-render based on posts
    const paths = boardData.boards.map((board) => `/board-page/${board.model}`)

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

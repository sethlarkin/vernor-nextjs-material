import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";


// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import imagesStyles from "assets/jss/nextjs-material-kit/imagesStyles.js";
import TreehuggerLogo from "assets/img/board-models/TreehuggerLogo.jpg";
import TreehuggerBoard from "assets/img/boards/main-treehugger.jpg";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { cardTitle } from "assets/jss/nextjs-material-kit.js";

const styles = {
    ...imagesStyles,
    cardTitle,
};

const TreeHugger = {
    "name": "Tree Hugger",
    "img": "assets/img/boards/main-treehugger-2019.jpg",
    "logo": "assets/img/board-models/TreeHuggerLogo.jpg",
    "description": "The Tree Hugger starts with a “Simmons Like” entry that provides extremely \
        fast paddling into the wave. The shape of the board lends itself to high performance surfing, \
        with a nod to the retro inspired hipsters. We suggest riding the board between 6’6 and 8’0 \
        and in a variety of conditions (between 2’ and 8’).",
    "dims": "Size range: 6'6\" - 8'0\" \
    Nose: 16 1/8\" \
    Middle: 21 5/8\" \
    Tail: 15 3/8\" \
    Thickness: 3\" \
    Volume (7'0\"): 46.5 liters (131 beers)"
};


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);

export default function TreehuggerCard({ boards, props }) {
    const classes = useStyles();
    const [classicModal, setClassicModal] = React.useState(false);

    return (
        <Card style={{ width: "20em", marginLeft: "17%" }}>
            <img
                style={{ height: "15%", width: "40%", display: "block", marginLeft: "auto", marginRight: "auto" }}
                src={TreehuggerLogo}
                alt="TreeHugger"
            />
            <img
                style={{ height: "30%", width: "60%", display: "block", marginLeft: "auto", marginRight: "auto" }}
                src={TreehuggerBoard}
                alt="TreeHugger"
            />
            <CardBody>
                <h1>{boards}</h1>

                <h4 className={classes.cardTitle}>{TreeHugger.name}</h4>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6} lg={4}>
                        <Button
                            color="primary"
                            block
                            onClick={() => setClassicModal(true)}
                        >
                            MORE
                </Button>
                        <Dialog
                            classes={{
                                root: classes.center,
                                paper: classes.modal
                            }}
                            open={classicModal}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={() => setClassicModal(false)}
                            aria-labelledby="classic-modal-slide-title"
                            aria-describedby="classic-modal-slide-description"
                        >
                            <DialogTitle
                                id="classic-modal-slide-title"
                                disableTypography
                                className={classes.modalHeader}
                            >
                                <IconButton
                                    className={classes.modalCloseButton}
                                    key="close"
                                    aria-label="Close"
                                    color="inherit"
                                    onClick={() => setClassicModal(false)}
                                >
                                    <Close className={classes.modalClose} />
                                </IconButton>
                                <h4 className={classes.cardTitle}>{TreeHugger.name}</h4>
                            </DialogTitle>
                            <DialogContent
                                id="classic-modal-slide-description"
                                className={classes.modalBody}
                            >
                                <img
                                    style={{ height: "40%", display: "block", marginLeft: "auto", marginRight: "auto" }}
                                    src={TreehuggerLogo}
                                    alt="TreeHugger"
                                />
                                <img
                                    style={{ width: "60%", display: "block", marginLeft: "auto", marginRight: "auto" }}
                                    src={TreehuggerBoard}
                                    alt="TreeHugger"
                                />
                                
                                <p>{TreeHugger.description}</p>
                                <br></br>
                                <p>{TreeHugger.dims}</p>
                            </DialogContent>
                            <DialogActions className={classes.modalFooter}>

                                <Button
                                    onClick={() => setClassicModal(false)}
                                    color="danger"
                                    simple
                                >
                                    Close
                    </Button>
                            </DialogActions>
                        </Dialog>
                    </GridItem>
                </GridContainer>
            </CardBody>
        </Card>
    );
}


export async function getStaticProps(context) {

    // const boards = {
    //   "barracuda": "board",

    // }

    // const boards = "hello"

    console.log("KNOIJOIJN")

    return {
        props: {
            boards, props
        },
    }
}


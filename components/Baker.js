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
import Logo from "assets/img/board-models/VernorLogo.jpg";
import Board from "assets/img/boards/main-baker.jpg";

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

const BoardInfo = {
    "name": "The Baker",
    "description": "The Baker is our newest idea in \
    high-performance twin-fins that can also be ridden \
    as a thruster. The Baker is super-fast and loose \
    with a single or double-concave, accelerated-V out \
    the tail, and a big nose so we can push more \
    volume forward. This allows for super-easy wave \
    catching. I recommend getting this board 2 inches \
    smaller than your Chef."
};


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);

export default function BoardInfoCard({ boards, props }) {
    const classes = useStyles();
    const [classicModal, setClassicModal] = React.useState(false);

    return (
        <Card style={{ width: "20em", marginLeft: "17%" }}>
            <img
                style={{ height: "30%", width: "80%", display: "block", marginLeft: "auto", marginRight: "auto" }}
                src={Logo}
                alt="BoardInfo"
            />
            <img
                style={{ height: "30%", width: "60%", display: "block", marginLeft: "auto", marginRight: "auto" }}
                src={Board}
                alt="BoardInfo"
            />
            <CardBody>
                <h1>{boards}</h1>

                <h4 className={classes.cardTitle}>{BoardInfo.name}</h4>
                <p>{BoardInfo.description}</p>
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
                                <h4 className={classes.modalTitle}>Modal title</h4>
                            </DialogTitle>
                            <DialogContent
                                id="classic-modal-slide-description"
                                className={classes.modalBody}
                            >
                                <p>{BoardInfo.description}</p>
                            </DialogContent>
                            <DialogActions className={classes.modalFooter}>
                                <Button color="transparent" simple>
                                    Nice Button
                    </Button>
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

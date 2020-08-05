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
import ChefLogo from "assets/img/board-models/chefLogojpg.jpg";
import ChefBoard from "assets/img/boards/main-chef.jpg";

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

const Chef = {
    "name": "Chef",
    "img": "assets/img/boards/main-Chef-2019.jpg",
    "logo": "assets/img/board-models/ChefLogo.jpg",
    "description": "The chef is a tweaked version \
    of the rubble that David and I worked on together. \
    We wanted to create a board that would enhance \
    my aerial surfing yet have a curvy outline to surf \
    in the pocket. By adding more width in the nose and \
    tail, the board feels like a skateboard, single \
    concave, ultra-fast and loose! If you want to push \
    your surfing to the next level, this is the board \
    for you! - Noah Threlked"
};


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);

export default function ChefCard({ boards, props }) {
    const classes = useStyles();
    const [classicModal, setClassicModal] = React.useState(false);

    return (
        <Card style={{ width: "20em", marginLeft: "17%" }}>
            <img
                style={{ height: "30%", width: "80%", display: "block", marginLeft: "auto", marginRight: "auto" }}
                src={ChefLogo}
                alt="Chef"
            />
            <img
                style={{ height: "30%", width: "60%", display: "block", marginLeft: "auto", marginRight: "auto" }}
                src={ChefBoard}
                alt="Chef"
            />
            <CardBody>
                <h1>{boards}</h1>

                <h4 className={classes.cardTitle}>{Chef.name}</h4>
                <p>{Chef.description}</p>
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
                                <p>{Chef.description}</p>
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


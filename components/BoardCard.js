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
import barracudaLogo from "assets/img/board-models/barracudaLogo.png";
import barracudaBoard from "assets/img/boards/main-barracuda.jpg";

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



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);

export default function BoardCard(props) {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);

  return (
    <div style={{padding: "10px"}}>
      <Card style={{ width: "20em", marginLeft: "auto", marginRight: "auto" }}>
        <img
          style={{ height: "40%", display: "block", marginLeft: "auto", marginRight: "auto" }}
          src={props.image}
          alt="BarracBoard Imageuda"
        />
        <img
          style={{ height: "30%", width: "34%", display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "6px" }}
          src={props.logo}
          alt="Board Logo"
        />
        <CardBody>

          <h4 className={classes.cardTitle}>{props.name}</h4>
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
                  {/* <IconButton
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={() => setClassicModal(false)}
                  >
                    <Close className={classes.modalClose} />
                  </IconButton> */}
                  <div style={{ display: "flex" }}>
                    <img
                      style={{ flex: 1, padding: "6px", marginTop: "10px" }}
                      src={props.image}
                      alt="Board Image"
                    />
                    <img
                      style={{ flex: 1, padding: "6px", display: "block", marginLeft:"20px", marginTop: "10px" }}
                      src={props.logo}
                      alt="Board Logo"
                    />
                  </div>


                  <h4 className={classes.modalTitle}><strong>{props.name}</strong></h4>
                </DialogTitle>
                <DialogContent
                  id="classic-modal-slide-description"
                  className={classes.modalBody}
                >
                  <p><strong>{props.description}</strong></p>
                <h6>Size Range: {props.dims.range}</h6>
                <h6>Nose: {props.dims.Nose}</h6>
                <h6>Middle: {props.dims.Middle}</h6>
                <h6>Tail: {props.dims.Tail}</h6>
                <h6>Thickness: {props.dims.Thickness}</h6>
                <h6>Volume: {props.dims.Volume}</h6>
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
    </div>
  );
}


export async function getStaticProps(context) {

  return {
    props: {
      props
    },
  }
}


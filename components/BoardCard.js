import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Link from 'next/link'

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import imagesStyles from "assets/jss/nextjs-material-kit/imagesStyles.js";

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
  const model = props.name.replace('The ', '').split(' ')[0].toLowerCase()

  return (
    <div style={{ padding: "10px" }}>
      <GridItem xs={12} sm={12} md={6} lg={4}>

        <Card style={{ width: "20em", marginLeft: "auto", marginRight: "auto", minHeight: "600px", paddingTop: "15px" }}>
          <img
            style={{ height: "40%", display: "block", marginLeft: "auto", marginRight: "auto" }}
            src={props.image}
            alt="BarracBoard Imageuda"
          />
          <img
            style={{ height: "100px", maxWidth: "20em", display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "20px", marginBottom: "auto" }}
            src={props.logo}
            alt="Board Logo"
          />
          <CardBody>
            <div style={{ position: "absolute", bottom: 0, left: 40, right: 40, paddingTop: "20px" }}>
              <h4 style={{ textAlign: "center", paddingTop: "20px" }}><strong>{props.name}</strong></h4>
              <Link href={"/board-page/" + props.model}>
                <Button
                  color="primary"
                  simple
                  block
                >
                  MORE
                </Button>
              </Link>
            </div>
            <Dialog
              classes={{
                root: classes.center,
                paper: classes.modal
              }}
              style={{ minHeight: "590px" }}
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
                {/* <div style={{ display: "flex" }}> */}
                <div>
                  <img
                    style={{ padding: "6px", marginTop: "10px" }}
                    src={props.image}
                    alt="Board Image"
                  />
                  <img
                    style={{ width: "30%", flex: 1, padding: "6px", display: "block", marginLeft: "20px", marginTop: "10px" }}
                    src={props.logo}
                    alt="Board Logo"
                  />
                </div>


                <h4 className={classes.modalTitle} ><strong>{props.name}</strong></h4>
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
          </CardBody>
        </Card>
      </GridItem>

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


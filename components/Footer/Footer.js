/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        {/* <div className={classes.left}> */}
        <div >
          <hr/>
          <List className={classes.list}>

            {/* <ListItem className={classes.inlineBlock}>
              <a
                href="/"
                className={classes.block}
                target="_self"
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/"
                className={classes.block}
                target="_self"
              >
                Blog
              </a>
            </ListItem> */}


            <ListItem className={classes.inlineBlock}>
              <h4 className={classes.block}><strong>ph. 831-234-4410</strong></h4>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <h5 className={classes.block}>381 Pine St, Watsonville, CA 95076</h5>
            </ListItem>
          </List>
          <hr/>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};

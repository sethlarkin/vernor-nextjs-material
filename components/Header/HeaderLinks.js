/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, InsertEmoticonSharp, BuildSharp, StoreSharp, AlbumSharp } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/boards"
          color="transparent"
          target="_self"
          className={classes.navLink}
        >
          <AlbumSharp className={classes.icons} /> Boards
        </Button>
      </ListItem>

      {/* Tech */}
      <ListItem className={classes.listItem}>
        <Button
          href="/tech"
          color="transparent"
          target="_self"
          className={classes.navLink}
        >
          <BuildSharp className={classes.icons} /> Tech
        </Button>
      </ListItem>

      {/* <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-navbar"
          color="transparent"
          target="_self"
          className={classes.navLink}
        >
          <InsertEmoticonSharp className={classes.icons} /> Stoke
        </Button>
      </ListItem> */}

      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          target="_self"
          className={classes.navLink}
        >
          <StoreSharp className={classes.icons} /> Get One
        </Button>
      </ListItem>


      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/davidvernorsurf/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/vernorsurfboards"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>

    </List>
  );
}

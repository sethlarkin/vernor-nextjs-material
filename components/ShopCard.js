import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";


// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

export default function BoardCard(props) {

    return (
        <div style={{ padding: "3px" }}>
            <Card style={{  minHeight: "200px" }}>
                <CardBody>
                    <h4>{props.name}</h4>
                    <address>{props.address}</address>
                    <p>{props.phone}</p>
                    <a href="{props.site}">{props.site}</a>
                </CardBody>
            </Card>
        </div>
    )

}
import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";


// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";


export default function BoardCard(props) {

    return (
        <div style={{ padding: "3px" }}>
            <GridItem xs={12} sm={12} md={6} lg={10}>

                <Card style={{ width: "20em", marginLeft: "auto", marginRight: "auto", minHeight: "170px" }}>
                    <CardBody>
                        <h4>{props.name}</h4>
                        <address>{props.address}</address>
                        <p>{props.phone}</p>
                        <div style={{ position: "absolute", bottom: 0, left: 40, right: 40 }}>
                            { props.site != "" &&
                                <Button
                                color="primary"
                                simple
                                block
                                href={"http://" + props.site}
                                target="_blank"
                                >
                                WEBSITE
                                </Button>
                            }
                        </div>
                    </CardBody>
                </Card>
            </GridItem>
        </div>
    )

}
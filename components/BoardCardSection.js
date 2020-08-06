import React from "react";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { makeStyles } from "@material-ui/core/styles";

import BoardCard from "components/BoardCard.js";
import TreehuggerCard from "components/TreehuggerCard.js";
import MinisimmonsCard from "components/MinisimmonsCard.js";
import ChefCard from "components/Chef.js";
import Falcon from "components/Falcon.js";
import Baker from "components/Baker.js";
import Hunter from "components/Hunter.js";
import Hellbilly from "components/Hellbilly.js";

export default function BoardCardSection() {
    return (
        <GridContainer
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <GridItem xs={12} sm={12} md={4} >
                <TreehuggerCard></TreehuggerCard>
            </GridItem>
        
            <GridItem xs={12} sm={12} md={4} >
                <MinisimmonsCard></MinisimmonsCard>
            </GridItem>
            <GridItem xs={12} sm={12} md={4} >
                <ChefCard></ChefCard>
            </GridItem>
            <GridItem xs={12} sm={12} md={4} >
                <Falcon></Falcon>
            </GridItem>
            <GridItem xs={12} sm={12} md={4} >
                <Baker></Baker>
            </GridItem>
            <GridItem xs={12} sm={12} md={4} >
                <Hunter></Hunter>
            </GridItem>
            <GridItem xs={12} sm={12} md={4} >
                <Hellbilly></Hellbilly>
            </GridItem>
        </GridContainer>
    );
}
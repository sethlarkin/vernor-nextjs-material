import React from "react";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { getBoardData } from '../lib/board-data'


export default function NewBoardCardSection({  allBoardsData }) {
    return (
        <GridContainer
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
        <h1>{allBoardsData}</h1>
            <GridItem xs={12} sm={12} md={4} >
                
            </GridItem>

            {/* <GridItem xs={12} sm={12} md={4} >
                <TreehuggerCard></TreehuggerCard>
            </GridItem> */}

        </GridContainer>
    );
}

NewBoardCardSection.getInitialProps = async (ctx) => {
    const allBoardsData = getBoardData
    return (allBoardsData)
}

export async function getStaticProps() {
    const allBoardsData = getBoardData()

    return {
        props: {
            allBoardsData
        }
    }
}
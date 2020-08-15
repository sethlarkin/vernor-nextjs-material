import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/pillsStyle.js";

import VectorFins from "public/img/VectorFins.jpg"

import AccessibleTable from "components/Tables/AccessibleTable.js"

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">

          <div className={classes.title}>
            <h3>
              <strong>Tech</strong>
            </h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Suspension",
                    tabContent: (
                      <span>
                        <p>
                          The large black "V" in the tail section above is the carbon fiber cloth used in the construction the revolutionary Vernor I-beam Suspension system. It is not a Vernor Surfboards logo as you will learn below.
                          the concept: less twist = more drive
                        </p>
                        <p>
                          A typical surfboard undergoes tortional twist, which wastes energy and drive. By taking out the torsional twist the I-beam Suspension creates more drive and, therefore a 30% faster board.
                        </p>
                        <br />
                        <h4><strong>the details: I-Beam Suspension construction</strong></h4>
                        <ul>
                          <li>
                          I-Beam Suspension is made in the board with a carbon-fiber bar and carbon fiber cloth outer wrap. This creates the distintive black "V" you see on all Vernor I-Beam Suspension Surfboards and Wake Surfboards. 
                          </li>
                        <li>
                        I-Beam connects the stringer to fin boxes and extends out to the rails
                        </li>
                        <li>
                        Vector double foil fins maximize the effect
                        </li>
                        <li>
                        Less torsional twist = better control
                        </li>
                        </ul>
                        <p>Vernor Surfboards has been making I-Beam Suspension surfboards since April 2003.</p>
                        <br/>
                        <h4><strong>finshing touches: vector fins make it even faster, even more responive</strong></h4>
                        <p>
                        Another important piece to the Vernor Surfboards suspension system is the Vector double-foil fin design by Futures Fins for both side fins. This amazing new fin design generates more torque and acceleration – you can feel it on your first turn.
                        </p>
                        <img src={VectorFins} alt="Vector Fins"/>
                      </span>
                    )
                  },
                  {
                    tabButton: "Materials",
                    tabContent: (
                      <span>
                        <h4><strong>materials</strong></h4>
                        <p>
                        We use the most advanced blanks and resins for custom surfboards and wake surfboards in the industry. Surfers can choose from polyurethane foam with polyester resin or EPS foam with epoxy resin. All boards use Direct-Size Hexcel fiberglass. The polyurethane boards use environmentally friendly and top of the line Y2K solar resin. The epoxy boards utilize 2 lb. EPS Edro Foam from Dixon, California, and Epoxy resin that is 35% more flexible and MUCH stronger which creates a stronger, lighter board.
                        </p>
                        <br />
                        <AccessibleTable />
                        <br/>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

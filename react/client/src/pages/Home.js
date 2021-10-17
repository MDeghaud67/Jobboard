import React from "react";

import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles"

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import JobList from "components/JobList";

const useStyles = makeStyles(styles);

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Parallax image={require("assets/img/bg4.jpg").default}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Jobboard</h1>
                                <h3 className={classes.subtitle}>
                                    Find your dream job.
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.section}>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <JobList />
                        </GridContainer>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;
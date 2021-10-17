import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import { getCompanyImage } from "utils/ajax";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(styles);



const JobItem = ({ job }) => {
    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgFluid
    );
    return (
        <GridItem className={classes.imgRaised} style={{ maxHeight: "300px", height: "300px" }} xs={4} sm={4} md={4}>
            <Box
                display="flex"
                height="100%"
                width="100%"
            >
                <Box
                    width="100%"
                    height="100%"
                    style={{backgroundColor: "black", maxWidth: "200px", maxHeight: "200px"}}
                >
                    <img src={getCompanyImage(job.Company.image)} alt="..."  />
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                >
                    <h4 className={classes.cardTitle}>
                        {job.Company.name}
                        <br />
                        <small className={classes.smallTitle}>{job.title}</small>
                    </h4>
                    <p className={classes.description}>{job.income}</p>
                    <p className={classes.description}>{job.experienceRequired}</p>
                    <Link to={`/job/${job.id}`} style={{ textDecoration: "none" }}>
                        <Button color="danger">APPLY</Button>
                    </Link>
                </Box>
            </Box>
        </GridItem>
    )
}

export default JobItem
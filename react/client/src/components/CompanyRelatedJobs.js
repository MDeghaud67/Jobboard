import React from "react";
import classNames from "classnames";
import { AppBar, makeStyles, Box } from "@material-ui/core";

import styles from "assets/jss/material-kit-react/components/headerStyle.js";
import GridContainer from "./Grid/GridContainer";
import GridItem from "./Grid/GridItem";
import { getCompanyImage } from "utils/ajax";
import Button from "components/CustomButtons/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

const CompanyRelatedJobs = ({ company }) => {
    const classes = useStyles();
    const appBarClasses = classNames({
        [classes.appBar]: true,
        [classes['dark']]: "dark",
    });
    return (
        <AppBar className={appBarClasses}>
            <GridContainer justify="space-between" style={{ width: "100%" }}>
                <Box ml={5}>
                    <GridItem xs={12} sm={2}>
                        <h4>{company.name}</h4>
                        <img
                            src={getCompanyImage(company.image)}
                            alt="..."
                            className={classes.imgRounded + " " + classes.imgFluid}
                        />
                    </GridItem>
                </Box>
                <Box mr={5} mt={3}>
                    <GridItem xs={12} sm={2}>
                        <Link to={`/company-job/${company.id}`} style={{ textDecoration: 'none' }}>
                            <Button
                                color="white"
                            >
                                View All Jobs
                            </Button>
                        </Link>
                    </GridItem>
                </Box>
            </GridContainer>
        </AppBar>
    )
}

export default CompanyRelatedJobs;
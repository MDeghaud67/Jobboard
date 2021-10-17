import React from "react";
import classNames from "classnames";
import { AppBar, makeStyles, Box } from "@material-ui/core";

import styles from "assets/jss/material-kit-react/components/headerStyle.js";
import GridContainer from "./Grid/GridContainer";
import GridItem from "./Grid/GridItem";
import { getCompanyImage } from "utils/ajax";

const useStyles = makeStyles(styles);

const CompanyHeadInfo = ({ company }) => {
    const classes = useStyles();
    const appBarClasses = classNames({
        [classes.appBar]: true,
        [classes['dark']]: "dark",
    });
    return (
        <AppBar className={appBarClasses}>
            <GridContainer justify="space-between" style={{ width: "100%" }} >
                <Box ml={20}>
                    <GridItem xs={12} sm={6}>
                        <img
                            src={getCompanyImage(company.image)}
                            alt="..."
                            className={classes.imgRounded + " " + classes.imgFluid}
                        />
                        <p>{company.description}</p>
                    </GridItem>
                </Box>
            </GridContainer>
        </AppBar>
    )
}

export default CompanyHeadInfo;
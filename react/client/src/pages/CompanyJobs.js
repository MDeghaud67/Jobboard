import React from "react";
import { useParams } from "react-router";
import { Redirect } from "react-router";
import { getJobsByCompany } from "../utils/ajax";

import classNames from "classnames";


import { Box } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer.js";
import CompanyHeadInfo from "components/CompanyHeadInfo";
import JobItem from "components/JobItem";

import { makeStyles } from "@material-ui/core/styles"
import styles from "assets/jss/material-kit-react/views/components.js";
import { NOT_FOUND } from "utils/toast";

const useStyles = makeStyles(styles);

const CompanyJobs = () => {
    const classes = useStyles();
    const { company } = useParams();
    const [jobs, setJobs] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);
    const [notFound, setNotFound] = React.useState(false);
    const [companyData, setCompanyData] = React.useState({});

    React.useEffect(() => {
        getJobsByCompany(company).then(res => {
            setJobs(res);
            for (let i = 0; i < res.length; i++) {
                if (res[i].Company) {
                    setCompanyData(res[i].Company);
                    break;
                }
            }
            setLoaded(true);
        }).catch(err => {
            setNotFound(true);
        })
    }, []);

    return (
        <Box pt={5}>
            {notFound ? <Redirect to={{
                pathname: "/",
                state: { toast: NOT_FOUND}
            }}></Redirect> : ""}
            {loaded ?
                <div>
                    <Box mb={5}>
                        <CompanyHeadInfo
                            company={companyData}
                        />
                    </Box>
                    <div className={classNames(classes.main, classes.mainRaised)}>
                        <div className={classes.section}>
                            <div className={classes.container}>
                                <GridContainer justify="center">
                                    <div className={classes.section}>
                                        <GridContainer>
                                            {jobs.map((job, i) => (
                                                <JobItem
                                                    job={job}
                                                    key={i}
                                                />

                                            ))}

                                        </GridContainer>
                                    </div>
                                </GridContainer>
                            </div>
                        </div>
                    </div>
                </div>
                : <div className="loading"></div>}
        </Box>
    )
};

export default CompanyJobs;
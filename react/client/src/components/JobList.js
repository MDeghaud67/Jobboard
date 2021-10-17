import React, { useEffect, useState } from "react";
import { getJobs } from '../utils/ajax';
import { makeStyles } from "@material-ui/core/styles";
import JobItem from './JobItem'


import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";


const useStyles = makeStyles(styles);

const JobList = () => {
    const classes = useStyles();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getJobs().then(res => {
            setJobs(res);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div className={classes.section}>
            <h1 className={classes.title}>Recent jobs</h1>
            <GridContainer>
                {jobs.map((job, i) => (
                    <JobItem
                        job={job}
                        key={i}
                    />

                ))}

            </GridContainer>
        </div>
    );
}

export default JobList
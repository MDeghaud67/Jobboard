import React from "react";

import { makeStyles } from "@material-ui/core/styles"

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { DataUsage } from "@material-ui/icons";
import CustomTabs from "components/CustomTabs/CustomTabs";


import styles from "assets/jss/material-kit-react/views/components.js";
import { Box } from "@material-ui/core";
import UserCrud from "components/UserCrud";
import { getAdminsData } from "utils/ajax";
import JobCrud from "components/JobCrud";
import CompanyCrud from "components/CompanyCrud";
import { useDispatch, useSelector } from "react-redux";
import { hydrate } from "slices/crud";


const useStyles = makeStyles(styles);

const Dashboard = () => {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(true);
    const datas = useSelector((state) => state.crud.data);
    const dispatch = useDispatch();
    React.useEffect(() => {
        getAdminsData().then(res => {
            setTimeout(() => {
                dispatch(hydrate(res));
                setLoading(false);
            }, 500)
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <Box pt={30}>
            {!loading ?
                <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                        <CustomTabs
                            headerColor="danger"
                            tabs={[
                                {
                                    tabName: "Users",
                                    tabIcon: DataUsage,
                                    tabContent: (
                                        <UserCrud
                                            users={datas.users}
                                        />
                                    ),
                                },
                                {
                                    tabName: "Jobs",
                                    tabIcon: DataUsage,
                                    tabContent: (
                                        <JobCrud
                                            jobs={datas.jobs}
                                        />
                                    ),
                                },
                                {
                                    tabName: "Companies",
                                    tabIcon: DataUsage,
                                    tabContent: (
                                        <CompanyCrud
                                            companies={datas.companies}
                                        />
                                    ),
                                },
                            ]}
                        />
                    </GridItem>
                </GridContainer>
                : <div className="loading"></div>}
        </Box>
    )
}

export default Dashboard;
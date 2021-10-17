import React from "react";
import { useParams } from "react-router";
import { getJob } from "../utils/ajax";
import Parser from 'html-react-parser';

import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Muted from "components/Typography/Muted";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import ApplyForm from "components/ApplyForm";

import styles from "assets/jss/material-kit-react/views/components.js";
import CompanyRelatedJobs from "components/CompanyRelatedJobs";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);

const Job = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [job, setJob] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);
    const [classicModal, setClassicModal] = React.useState(false);

    React.useEffect(() => {
        getJob(id).then(res => {
            setJob(res);
            setLoaded(true);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <Box pt={5}>
            {loaded ?
                <div>
                    <Box mb={5}>
                        <CompanyRelatedJobs
                            company={job.Company}
                        />
                    </Box>
                    <div className={classes.section}>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <div className={classes.section}>
                                    <GridContainer>
                                        <GridItem lg={3}>
                                            <h3>{job.title}</h3>
                                            <Button
                                                color="success"
                                                block
                                                onClick={() => setClassicModal(true)}
                                            >
                                                <LibraryBooks className={classes.icon} />
                                                APPLY
                                            </Button>
                                            <Dialog
                                                classes={{
                                                    root: classes.center,
                                                    paper: classes.modal,
                                                }}
                                                open={classicModal}
                                                TransitionComponent={Transition}
                                                keepMounted
                                                onClose={() => setClassicModal(false)}
                                                aria-labelledby="classic-modal-slide-title"
                                                aria-describedby="classic-modal-slide-description"
                                            >
                                                <DialogTitle
                                                    id="classic-modal-slide-title"
                                                    disableTypography
                                                    className={classes.modalHeader}
                                                >
                                                    <IconButton
                                                        className={classes.modalCloseButton}
                                                        key="close"
                                                        aria-label="Close"
                                                        color="inherit"
                                                        onClick={() => setClassicModal(false)}
                                                    >
                                                    </IconButton>
                                                    <h4 className={classes.modalTitle}>Postuler a l'offre de {job.Company.name}</h4>
                                                </DialogTitle>
                                                <DialogContent
                                                    id="classic-modal-slide-description"
                                                    className={classes.modalBody}
                                                >
                                                    <ApplyForm jobId={id} onSuccessApply={() => setClassicModal(false)} />
                                                </DialogContent>
                                                <DialogActions className={classes.modalFooter}>
                                                    <Button
                                                        onClick={() => setClassicModal(false)}
                                                        color="danger"
                                                        simple
                                                    >
                                                        Annuler
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
                                            <Muted>{job.localisation}</Muted>
                                            <Muted>{job.income}</Muted>
                                            <Muted>{job.experienceRequired}</Muted>
                                        </GridItem>
                                        <GridItem lg={9}>
                                            <div className={classes.mainRaised}>
                                                <Box m={5} pt={3} pb={3}>
                                                    {Parser(job.description)}
                                                </Box>
                                            </div>
                                        </GridItem>
                                    </GridContainer>
                                </div>
                            </GridContainer>
                        </div>
                    </div>
                </div>
                : <div className="loading"></div>}
        </Box>
    )
};

export default Job;
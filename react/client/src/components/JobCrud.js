import React from "react";

import DataTable from "react-data-table-component";
import Button from "components/CustomButtons/Button";
import GridContainer from "./Grid/GridContainer";
import GridItem from "./Grid/GridItem";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";

import { Switch, Route } from "react-router";
import { makeStyles } from "@material-ui/core/styles"

import styles from "assets/jss/material-kit-react/views/components.js";
import { useToasts } from "react-toast-notifications";
import makeToast, { CRUD_DELETE } from "utils/toast";
import { useDispatch } from "react-redux";
import { deleteAction } from "slices/crud";
import { deleteJob } from "utils/ajax";
import { Link } from "react-router-dom";
import JobForm from "components/JobForm";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);



const JobCrud = ({ jobs }) => {
    const classes = useStyles();
    const { addToast } = useToasts()
    const dispatch = useDispatch();
    const [classicModal, setClassicModal] = React.useState(false);
    const [jobSelected, setJobSelected] = React.useState({});

    const confirmDelete = (row) => {
        setJobSelected(row);
        setClassicModal(true)
    }

    const handleDelete = () => {
        setClassicModal(false);
        deleteJob(jobSelected.id).then(res => {
            addToast(...makeToast(CRUD_DELETE));
            dispatch(deleteAction({
                entity: 'jobs',
                id: jobSelected.id
            }))
        }).catch(err => {
            console.log(err)
        })
    }


    const columns = [
        {
            name: 'Id',
            selector: row => row.id
        },
        {
            name: 'Title',
            selector: row => row.title
        },
        {
            name: 'Company',
            selector: row => row.Company.name,
        },
        {
            name: 'experienceRequired',
            selector: row => row.experienceRequired
        },
        {
            name: 'income',
            selector: row => row.income
        },
        {
            name: "Action",
            selector: row => (
                <GridContainer>
                    <Link to={`/admin/edit-job/${row.id}`}>
                            <Button color="info">Edit</Button>
                        </Link>
                    <GridItem sm={6}>
                        <Button color="danger" onClick={() => confirmDelete(row)}>Delete</Button>
                    </GridItem>
                </GridContainer>
            )
        }
    ];

    return (
        <div>
            <Switch>
                <Route exact path="/admin">
                    <GridContainer justify="center">
                        <Link to="/admin/create-job">
                            <Button color="success">Create</Button>
                        </Link>
                    </GridContainer>
                    <DataTable
                        columns={columns}
                        data={jobs}
                    />
                </Route>
                <Route exact path="/admin/create-job">
                    <GridContainer justify="center">
                        <Link to="/admin" style={{ textDecoration: "none" }}>
                            <Button color="danger">Annuler</Button>
                        </Link>
                    </GridContainer>
                    <JobForm />
                </Route>
                <Route exact path="/admin/edit-job/:id">
                    <GridContainer justify="center">
                        <Link to="/admin" style={{ textDecoration: "none" }}>
                            <Button color="danger">Annuler</Button>
                        </Link>
                    </GridContainer>
                    <JobForm jobs={jobs} isUpdate={true} />
                </Route>
            </Switch>
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
                        <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>Voulez vous vraiment supprimer l'annonce {jobSelected?.title}</h4>
                </DialogTitle>
                <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                >
                    <Button onClick={handleDelete} color="success">
                        Oui
                    </Button>
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
        </div>
    )
}

export default JobCrud;
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

import { makeStyles } from "@material-ui/core/styles"

import styles from "assets/jss/material-kit-react/views/components.js";
import { deleteCompany, getCompanyImage } from "utils/ajax";
import { useToasts } from "react-toast-notifications";
import makeToast, { CRUD_DELETE } from "utils/toast";
import { useDispatch } from "react-redux";
import { deleteAction } from "slices/crud";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";
import CompanyForm from "./CompanyForm";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);


const CompanyCrud = ({ companies }) => {
    const classes = useStyles();
    const { addToast } = useToasts()
    const dispatch = useDispatch();
    const [classicModal, setClassicModal] = React.useState(false);
    const [companySelected, setCompanySelected] = React.useState({});

    const confirmDelete = (row) => {
        setCompanySelected(row);
        setClassicModal(true)
    }



    const handleDelete = () => {
        setClassicModal(false);
        deleteCompany(companySelected.id).then(res => {
            addToast(...makeToast(CRUD_DELETE));
            dispatch(deleteAction({
                entity: 'companies',
                id: companySelected.id
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
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Image',
            selector: row => <img src={getCompanyImage(row.image)} alt="..." />
        },
        {
            name: 'Description',
            selector: row => row.description
        },
        {
            name: "Action",
            selector: row => (
                <GridContainer>
                    <Link to={`/admin/edit-company/${row.id}`}>
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
                        <Link to="/admin/create-company">
                            <Button color="success">Create</Button>
                        </Link>
                    </GridContainer>
                    <DataTable
                        columns={columns}
                        data={companies}
                    />
                </Route>
                <Route exact path="/admin/create-company">
                    <GridContainer justify="center">
                        <Link to="/admin" style={{ textDecoration: "none" }}>
                            <Button color="danger">Annuler</Button>
                        </Link>
                    </GridContainer>
                    <CompanyForm />
                </Route>
                <Route exact path="/admin/edit-company/:id">
                    <GridContainer justify="center">
                        <Link to="/admin" style={{ textDecoration: "none" }}>
                            <Button color="danger">Annuler</Button>
                        </Link>
                    </GridContainer>
                    <CompanyForm companies={companies} isUpdate={true} />
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
                    <h4 className={classes.modalTitle}>Voulez vous vraiment cet entreprise  {companySelected?.name} (tout les offres concernant cette entreprise seront aussi supprimé)</h4>
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

export default CompanyCrud;
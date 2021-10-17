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
import { deleteUser } from "utils/ajax";
import { useToasts } from "react-toast-notifications";
import makeToast, { CRUD_DELETE } from "utils/toast";
import { useDispatch } from "react-redux";
import { deleteAction } from "slices/crud";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import UserForm from "components/UserForm"

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(styles);

const UserCrud = ({ users }) => {
    const classes = useStyles();
    const { addToast } = useToasts();
    const dispatch = useDispatch();
    const [userData, setUserData] = React.useState([]);
    const [classicModal, setClassicModal] = React.useState(false);
    const [userSelected, setUserSelected] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        const arr = [];
        users.forEach(user => {
            let userCopy = { ...user };
            if (userCopy.isAdmin) {
                userCopy.isAdmin = "Oui"
            } else {
                userCopy.isAdmin = "Non";
            }
            arr.push(userCopy)
        });
        setUserData(arr);
        setLoading(false);
    }, [users]);

    const confirmDelete = (row) => {
        setUserSelected(row);
        setClassicModal(true)
    }

    const handleDelete = () => {
        setClassicModal(false);
        deleteUser(userSelected.id).then(res => {
            addToast(...makeToast(CRUD_DELETE));
            dispatch(deleteAction({
                entity: 'users',
                id: userSelected.id
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
            name: 'First Name',
            selector: row => row.first_name,
        },
        {
            name: 'Last Name',
            selector: row => row.last_name,
        },
        {
            name: 'Email',
            selector: row => row.email
        },
        {
            name: 'Admin',
            selector: row => row.isAdmin
        },
        {
            name: "Action",
            selector: row => (
                <GridContainer>
                    <GridItem sm={6}>
                        <Link to={`/admin/edit-user/${row.id}`}>
                            <Button color="info">Edit</Button>
                        </Link>
                    </GridItem>
                    <GridItem sm={6}>
                        <Button color="danger" onClick={() => confirmDelete(row)}>Delete</Button>
                    </GridItem>
                </GridContainer>
            )
        }
    ];
    return (
        <div>
            {!loading ?
                <div>
                    <Switch>
                        <Route exact path="/admin">
                            <GridContainer justify="center">
                                <Link to="/admin/create-user">
                                    <Button color="success">Create</Button>
                                </Link>
                            </GridContainer>
                            <DataTable
                                columns={columns}
                                data={userData}
                            />
                        </Route>
                        <Route exact path="/admin/create-user">
                            <GridContainer justify="center">
                                <Link to="/admin" style={{textDecoration: "none"}}> 
                                    <Button color="danger">Annuler</Button>
                                </Link>
                            </GridContainer>
                            <UserForm />
                        </Route>
                        <Route exact path="/admin/edit-user/:id">
                            <GridContainer justify="center">
                                <Link to="/admin" style={{textDecoration: "none"}}> 
                                    <Button color="danger">Annuler</Button>
                                </Link>
                            </GridContainer>
                            <UserForm users={users} isUpdate={true} />
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
                            <h4 className={classes.modalTitle}>Voulez vous vraiment supprimer l'utilisateur {userSelected?.email}</h4>
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
                : <div className="loading"></div>}
        </div>
    )
}

export default UserCrud;
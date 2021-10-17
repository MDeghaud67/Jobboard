/*eslint-disable*/
import React, { useEffect } from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { People, PowerOff } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import { eraseAuthToken } from "utils/jwt";
import { logout } from "slices/user";
import { useToasts } from "react-toast-notifications";
import makeToast, { LOGOUT } from "utils/toast";

const useStyles = makeStyles(styles);

export default function HeaderLinks({ isScrolled }) {
    const classes = useStyles();
    const { addToast } = useToasts();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();


    const handleLogout = async () => {
        await eraseAuthToken();
        dispatch(logout());
        addToast(...makeToast(LOGOUT));
    }

    return (
        <div>
            {!user.authentificated ?
                <List className={classes.list}>
                    <Link to="/login" style={{ textDecoration: 'none', color: isScrolled ? "black" : "white" }}>
                        <ListItem className={classes.listItem}>
                            <Button
                                color="transparent"
                                className={classes.navLink}
                            >
                                <People className={classes.icons} /> Login
                            </Button>
                        </ListItem>
                    </Link>
                    <Link to="/register" style={{ textDecoration: 'none', color: isScrolled ? "black" : "white" }}>
                        <ListItem className={classes.listItem}>
                            <Button
                                color="transparent"
                                className={classes.navLink}
                            >
                                <People className={classes.icons} /> Register
                            </Button>
                        </ListItem>
                    </Link>
                </List>

                : <List>
                    <ListItem className={classes.listItem}>
                        <Box mt={3}>
                            <Button
                                color="transparent"
                                className={classes.navLink}
                                onClick={handleLogout}
                            >
                                <PowerOff className={classes.icons} /> Logout
                            </Button>
                        </Box>
                    </ListItem>
                    {user?.data?.isAdmin ?
                        <Link to="/admin" style={{ textDecoration: 'none', color: isScrolled ? "black" : "white" }}>
                            <ListItem className={classes.listItem}>
                                <Box mt={3}>
                                </Box>
                                <Button
                                    color="transparent"
                                    className={classes.navLink}
                                >
                                    <People className={classes.icons} /> Dashboard Admin
                                </Button>
                            </ListItem>
                        </Link>
                        : ""}
                </List>}
        </div >
    );
}

import React from "react";


import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Icon from "@material-ui/core/Icon";
import { Email, People, Visibility } from "@material-ui/icons/"
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import { Box, makeStyles } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { createUser, updateUser } from "utils/ajax";
import { useDispatch } from "react-redux";
import { createAction, updateAction } from "slices/crud";
import makeToast, { NOT_FOUND } from "utils/toast";
import { CRUD_CREATE, CRUD_UPDATE } from "utils/toast";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

const useStyles = makeStyles(styles);

const UserForm = ({ users, isUpdate = false }) => {
    const classes = useStyles();
    const { addToast } = useToasts();
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    React.useEffect(() => {
        if (id && isUpdate) {
            const findUser = users.find(user => user.id == id);
            if (!findUser) {
                history.push('admin');
                addToast(...makeToast(NOT_FOUND));
            }
           setFormProp({...findUser})
           setIsAdmin(findUser.isAdmin)
        }
    }, [id]);
    const [visibility, setVisibility] = React.useState(false);
    const [formProp, setFormProp] = React.useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        isAdmin: false
    });
    const [isAdmin, setIsAdmin] = React.useState(formProp.isAdmin);
    const [errorsProp, setErrorsProp] = React.useState({})
    const [loading, setLoading] = React.useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormProp((prevState) => {
            return { ...prevState, [name]: value }
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        formProp.isAdmin = isAdmin;
        setLoading(true);
        if (isUpdate) {
            updateUser(id, formProp).then(res => {
                setTimeout(() => {
                    setLoading(false);
                    dispatch(updateAction({
                        entity: 'users',
                        item: res
                    }));
                    addToast(...makeToast(CRUD_UPDATE));
                    history.push('/admin');
                }, 500);
            }).catch(err => {
                setLoading(false);
                if (err.emssage) {
                    const { message } = err;
                    setErrorsProp(JSON.parse(message));
                }
            })
        } else {
            createUser(formProp).then(res => {
                setTimeout(() => {
                    setLoading(false);
                    dispatch(createAction({
                        entity: 'users',
                        data: res[0]
                    }));
                    addToast(...makeToast(CRUD_CREATE));
                    history.push('/admin');
                }, 500);
            }).catch(err => {
                setLoading(false);
                if (err.message) {
                    const { message } = err;
                    setErrorsProp(JSON.parse(message));
                }
            })
        }
    };

    return (
        <div className={loading ? 'loading' : ""}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <GridContainer>
                    <GridItem sm={6}>
                        <CustomInput
                            labelText="Email..."
                            id="email"
                            error={errorsProp.email !== undefined}
                            errorMessage={errorsProp.email}
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                type: "email",
                                error: errorsProp.email !== undefined,
                                name: "email",
                                value: formProp.email,
                                onChange: handleChange,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Email className={classes.inputIconsColor} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </GridItem>
                    <GridItem sm={6}>
                        <CustomInput
                            labelText="First Name..."
                            id="first_name"
                            error={errorsProp.first_name !== undefined}
                            errorMessage={errorsProp.first_name}
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                type: "text",
                                error: errorsProp.first_name !== undefined,
                                name: "first_name",
                                value: formProp.first_name,
                                onChange: handleChange,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <People className={classes.inputIconsColor} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </GridItem>
                    <GridItem sm={6}>
                        <CustomInput
                            labelText="Last Name..."
                            id="last_name"
                            error={errorsProp.last_name !== undefined}
                            errorMessage={errorsProp.last_name}
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                type: "text",
                                name: "last_name",
                                error: errorsProp.last_name !== undefined,
                                value: formProp.last_name,
                                onChange: handleChange,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <People className={classes.inputIconsColor} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </GridItem>
                    {!isUpdate ?
                        <GridItem sm={6}>
                            <CustomInput
                                labelText="Password"
                                id="pass"
                                error={errorsProp.password !== undefined}
                                errorMessage={errorsProp.password}
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                inputProps={{
                                    type: visibility ? "text" : "password",
                                    error: errorsProp.password !== undefined,
                                    name: "password",
                                    value: formProp.password,
                                    onChange: handleChange,
                                    endAdornment: (
                                        <InputAdornment style={{ cursor: "pointer" }} position="end" onClick={() => setVisibility(!visibility)}>
                                            <Icon className={classes.inputIconsColor}>
                                                <Visibility className={classes.inputIconsColor}
                                                />
                                            </Icon>
                                        </InputAdornment>
                                    ),
                                    autoComplete: "off",
                                }}
                            />
                        </GridItem>
                        : null}
                    <GridItem sm={12} alignItems="center">
                        <Box
                            display="flex"
                            justifyContent="center"
                        >
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={isAdmin}
                                        onChange={(event) => setIsAdmin(event.target.checked)}
                                        value="checkedA"
                                        classes={{
                                            switchBase: classes.switchBase,
                                            checked: classes.switchChecked,
                                            thumb: classes.switchIcon,
                                            track: classes.switchBar,
                                        }}
                                    />
                                }
                                classes={{
                                    label: classes.label,
                                }}
                                label="Admin"
                            />
                        </Box>
                        <Box
                            display="flex"
                            justifyContent="center"
                        >
                            <Button color="success" type="submit">
                                {!isUpdate ? "Créer" : "Update"}
                            </Button>
                        </Box>
                    </GridItem>
                </GridContainer>
            </form>
        </div>
    )
}

export default UserForm;
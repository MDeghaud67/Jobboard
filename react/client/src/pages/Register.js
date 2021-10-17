import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import { Email, People, Visibility } from "@material-ui/icons/"

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

import { register } from "utils/ajax";
import { Redirect } from "react-router";
import { REGISTER_SUCCESSFULL } from "utils/toast";


const useStyles = makeStyles(styles);

export default function Register(props) {
    const [visibility, setVisibility] = React.useState(false);
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    const [formProp, setFormProp] = React.useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });
    const [errorsProp, setErrorsProp] = React.useState({})
    const [loading, setLoading] = React.useState(false);
    const [redirect, setRedirect] = React.useState(false);

    setTimeout(function () {
        setCardAnimation("");
    }, 200);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormProp((prevState) => {
            return { ...prevState, [name]: value }
        })
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        register(formProp).then(res => {
            setTimeout(() => {
                setLoading(false);
                setRedirect(true);
            }, 500);
        }).catch(err => {
            setLoading(false);
            if (err.message) {
                const { message } = err;
                setErrorsProp(JSON.parse(message));
            }
        })
    };

    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            {redirect ?
                <Redirect to={{
                    pathname: "/login",
                    state: { toast: REGISTER_SUCCESSFULL}
                }} />
                : ""}
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                }}
            >
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes[cardAnimaton], loading ? 'loading' : ""}>
                                <form onSubmit={handleSubmit} className={classes.form}>
                                    <CardHeader color="success" className={classes.cardHeader}>
                                        <h4>Register</h4>
                                    </CardHeader>
                                    <CardBody>
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
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <Button color="success" type="submit" size="sm">
                                            Login
                                        </Button>
                                    </CardFooter>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}

import React from "react";

import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import { Email, Person, Message } from "@material-ui/icons/"
import Button from "components/CustomButtons/Button.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import { makeStyles } from "@material-ui/core";
import { applyJob, authApplyJob} from "utils/ajax";
import makeToast, { APPLY_SUCCESSFULL } from "utils/toast";
import { useToasts } from "react-toast-notifications";
import { useSelector } from "react-redux";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"

const useStyles = makeStyles(styles);

const ApplyForm = ({ jobId = null, onSuccessApply }) => {
    const classes = useStyles();
    const { addToast } = useToasts()
    const user = useSelector((state) => state.user);
    const [formProp, setFormProp] = React.useState({
        email: '',
        firstname: '',
        text: '',
        jobId
    });
    const [errorsProp, setErrorsProp] = React.useState({});
    const [loading, setLoading] = React.useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormProp((prevState) => {
            return { ...prevState, [name]: value }
        })
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        let requestFn;
        if (user.authentificated) {
            requestFn = authApplyJob;
        } else {
            requestFn = applyJob;
        }
        requestFn(formProp).then(res => {
            setTimeout(() => {
                setLoading(false);
                addToast(...makeToast(APPLY_SUCCESSFULL));
                onSuccessApply();
                setFormProp({
                    email: '',
                    firstname: '',
                    text: '',
                    jobId
                });
            }, 500);
        }).catch(err => {
            setLoading(false);
            if (err.message) {
                const { message } = err;
                setErrorsProp(JSON.parse(message));
            }
        })

    }


    return (
        <div className={loading ? 'loading' : ''}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <CardBody>
                    {!user.authentificated ?
                        <div>
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
                                labelText="First Name..."
                                id="firstname"
                                error={errorsProp.firstname !== undefined}
                                errorMessage={errorsProp.firstname}
                                formControlProps={{
                                    fullWidth: true,
                                }}
                                inputProps={{
                                    type: "text",
                                    error: errorsProp.firstname !== undefined,
                                    name: "firstname",
                                    value: formProp.firstname,
                                    onChange: handleChange,
                                    endAdornment: (
                                        <InputAdornment style={{ cursor: "pointer" }} position="end">
                                            <Icon className={classes.inputIconsColor}>
                                                <Person className={classes.inputIconsColor} />
                                            </Icon>
                                        </InputAdornment>
                                    ),
                                    autoComplete: "off",
                                }}
                            />
                        </div>
                        :
                        <GridContainer>
                            <GridItem>
                                <h6>Vous ête connecté et vos donnés enregistrez seront envoyé</h6>
                            </GridItem>
                        </GridContainer>
                    }
                    <CustomInput
                        labelText="Message..."
                        id="message"
                        error={errorsProp.text !== undefined}
                        errorMessage={errorsProp.text}
                        formControlProps={{
                            fullWidth: true,
                        }}
                        inputProps={{
                            error: errorsProp.text !== undefined,
                            name: "text",
                            value: formProp.text,
                            onChange: handleChange,
                            multiline: true,
                            rows: 5,
                            endAdornment: (
                                <InputAdornment style={{ cursor: "pointer" }} position="end">
                                    <Icon className={classes.inputIconsColor}>
                                        <Message className={classes.inputIconsColor} />
                                    </Icon>
                                </InputAdornment>
                            ),
                        }}
                    />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                    <Button color="success" size="sm" type="submit">
                        Postuler
                    </Button>
                </CardFooter>
            </form>
        </div>
    )
}

export default ApplyForm;
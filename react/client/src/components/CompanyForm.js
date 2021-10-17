import React from "react";

import InputAdornment from "@material-ui/core/InputAdornment";
import { Business, Message, CloudUpload } from "@material-ui/icons/"
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import { Box, makeStyles } from "@material-ui/core";


import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";
import { createCompany, updateCompany } from "utils/ajax";
import { useDispatch } from "react-redux";
import { createAction, updateAction } from "slices/crud";
import makeToast from "utils/toast";
import { CRUD_CREATE, CRUD_UPDATE } from "utils/toast";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";



const useStyles = makeStyles(styles);

const CompanyForm = ({ companies = null, isUpdate = false }) => {
    const classes = useStyles();
    const { addToast } = useToasts();
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    React.useEffect(() => {
        if (id && isUpdate) {
            const findCompany = companies.find(company => company.id == id);
            if (!findCompany) {
                history.push('admin');
                addToast(...makeToast(NOT_FOUND));
            }
            setFormProp({ ...findCompany });
        }
    }, [id]);

    const [formProp, setFormProp] = React.useState({
        name: "",
        picture: "",
        description: "",
    });
    const [errorsProp, setErrorsProp] = React.useState({})
    const [loading, setLoading] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormProp((prevState) => {
            return { ...prevState, [name]: value }
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormProp((prevState) => {
            return { ...prevState, picture: file };
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append(
            "picture",
            formProp.picture,
        );
        formData.append("name", formProp.name);
        formData.append("description", formProp.description);
        if (isUpdate) {
            updateCompany(id, formData).then(res => {
                setTimeout(() => {
                    setLoading(false);
                    dispatch(updateAction({
                        entity: 'companies',
                        item: res
                    }));
                    addToast(...makeToast(CRUD_UPDATE));
                    history.push('/admin');
                }, 500)
            }).catch(err => {
                setLoading(false);
                if (err.message) {
                    const { message } = err;
                    setErrorsProp(JSON.parse(message));
                }
            })
        } else {
            createCompany(formData).then(res => {
                setTimeout(() => {
                    setLoading(false);
                    dispatch(createAction({
                        entity: 'companies',
                        data: res
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
                    <GridItem sm={12}>
                        <CustomInput
                            labelText="Name"
                            id="name"
                            error={errorsProp.name !== undefined}
                            errorMessage={errorsProp.name}
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                type: "text",
                                error: errorsProp.name !== undefined,
                                name: "name",
                                value: formProp.name,
                                onChange: handleChange,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Business className={classes.inputIconsColor} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </GridItem>
                    <GridItem sm={12}>
                        <CustomInput
                            labelText="Description..."
                            id="description"
                            error={errorsProp.description !== undefined}
                            errorMessage={errorsProp.description}
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                error: errorsProp.description !== undefined,
                                name: "description",
                                value: formProp.description,
                                onChange: handleChange,
                                multiline: true,
                                rows: 5,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Message className={classes.inputIconsColor} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </GridItem>
                    <GridItem sm={12}>
                        <p>{errorsProp?.picture}</p>
                        <p>{formProp?.picture?.name}</p>
                        <Button
                            color="primary"
                            variant="contained"
                            component="label"
                            style={{ width: "100%" }}
                        >
                            Upload File
                            <input
                                type="file"
                                name="picture"
                                onChange={handleFileChange}
                                hidden
                            />
                            <InputAdornment position="end">
                                <CloudUpload className={classes.inputIconsColor} />
                            </InputAdornment>
                        </Button>
                    </GridItem>
                    <GridItem sm={12}>
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
        </div >
    )
}

export default CompanyForm;
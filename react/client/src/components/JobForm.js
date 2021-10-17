import React from "react";
import moment from 'moment';
import 'moment/locale/fr';

import InputAdornment from "@material-ui/core/InputAdornment";
import { Email, Business, Build, AccessTime, LocationCity, Message } from "@material-ui/icons/"
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import { Box, makeStyles, InputLabel, FormControl, MenuItem, Select } from "@material-ui/core";
import Datetime from "react-datetime";


import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";
import { createJob } from "utils/ajax";
import { useDispatch, useSelector } from "react-redux";
import { createAction, updateAction } from "slices/crud";
import makeToast from "utils/toast";
import { CRUD_CREATE, CRUD_UPDATE } from "utils/toast";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { updateJob } from "utils/ajax";



const useStyles = makeStyles(styles);

const JobForm = ({ jobs = null, isUpdate = false }) => {
    const classes = useStyles();
    const { addToast } = useToasts();
    const dispatch = useDispatch();
    const history = useHistory();
    const companies = useSelector((state) => state.crud.data.companies);
    const { id } = useParams();
    React.useEffect(() => {
        if (id && isUpdate) {
            const findJob = jobs.find(job => job.id == id);
            if (!findJob) {
                history.push('admin');
                addToast(...makeToast(NOT_FOUND));
            }
            setFormProp({ ...findJob });
        }
    }, [id]);
    const [formProp, setFormProp] = React.useState({
        title: "",
        companyId: "",
        description: "",
        experienceRequired: "",
        workingTime: "",
        starAt: "",
        income: null,
        localisation: "",
    });
    const [errorsProp, setErrorsProp] = React.useState({})
    const [loading, setLoading] = React.useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormProp((prevState) => {
            return { ...prevState, [name]: value }
        })
    };

    const handleStartChange = (e) => {
        if (e._isAMomentObject) {
            let date = e.format('YYYY-MM-DD HH:mm:ss');
            formProp.starAt = date;
            return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        if (isUpdate) {
            updateJob(id, formProp).then(res => {
                setTimeout(() => {
                    setLoading(false);
                    dispatch(updateAction({
                        entity: 'jobs',
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
            createJob(formProp).then(res => {
                setTimeout(() => {
                    setLoading(false);
                    dispatch(createAction({
                        entity: 'jobs',
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
                    <GridItem sm={6}>
                        <CustomInput
                            labelText="Title..."
                            id="title"
                            error={errorsProp.title !== undefined}
                            errorMessage={errorsProp.title}
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                type: "text",
                                error: errorsProp.title !== undefined,
                                name: "title",
                                value: formProp.title,
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
                        <Box mt={1.5}>
                            <FormControl fullWidth>
                                <InputLabel id="companyId">Company</InputLabel>
                                <Select
                                    labelId="companyId"
                                    id="companyId"
                                    name="companyId"
                                    value={formProp.companyId}
                                    label="Age"
                                    onChange={handleChange}
                                    endAdornment={(
                                        <InputAdornment position="end">
                                            <Business className={classes.inputIconsColor} />
                                        </InputAdornment>
                                    )}
                                >
                                    {companies.map((company, key) => (
                                        <MenuItem key={key} value={company.id}>{company.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </GridItem>
                    <GridItem sm={6}>
                        <CustomInput
                            labelText="Experience required..."
                            id="experienceRequired"
                            error={errorsProp.experienceRequired !== undefined}
                            errorMessage={errorsProp.experienceRequired}
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                type: "text",
                                error: errorsProp.experienceRequired !== undefined,
                                name: "experienceRequired",
                                value: formProp.experienceRequired,
                                onChange: handleChange,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Build className={classes.inputIconsColor} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </GridItem>
                    <GridItem sm={6}>
                        <CustomInput
                            labelText="Working time..."
                            id="workingTime"
                            error={errorsProp.workingTime !== undefined}
                            errorMessage={errorsProp.workingTime}
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                type: "text",
                                name: "workingTime",
                                error: errorsProp.workingTime !== undefined,
                                value: formProp.workingTime,
                                onChange: handleChange,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <AccessTime className={classes.inputIconsColor} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </GridItem>
                    <GridItem sm={6}>
                        <Box mt={3}>
                            <FormControl fullWidth>
                                <Datetime locale="fr-ca" onChange={handleStartChange}
                                    inputProps={{
                                        placeholder: "Date de début",
                                        name: "startAt",
                                    }}
                                />
                            </FormControl>
                        </Box>
                    </GridItem>
                    <GridItem sm={6}>
                        <CustomInput
                            labelText="Localisation"
                            id="localisation"
                            error={errorsProp.localisation !== undefined}
                            errorMessage={errorsProp.localisation}
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                type: "text",
                                name: "localisation",
                                error: errorsProp.localisation !== undefined,
                                value: formProp.localisation,
                                onChange: handleChange,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <LocationCity className={classes.inputIconsColor} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </GridItem>
                    <GridItem sm={12}>
                        <CustomInput
                            labelText="Description"
                            id="description"
                            error={errorsProp.description !== undefined}
                            errorMessage={errorsProp.description}
                            formControlProps={{
                                fullWidth: true,
                            }}
                            inputProps={{
                                name: "description",
                                error: errorsProp.description !== undefined,
                                value: formProp.description,
                                onChange: handleChange,
                                multiline: true,
                                rows: 5,
                                endAdornment: (
                                    <InputAdornment style={{ cursor: "pointer" }} position="end">
                                        <Message className={classes.inputIconsColor} />
                                    </InputAdornment>
                                ),
                            }}
                        />
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

export default JobForm;
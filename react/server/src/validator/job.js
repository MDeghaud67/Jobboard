const Validator = require("validator").default;
const isEmpty = require("is-empty");

exports.validatePostCompany = (data) => {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : "";
    data.company = !isEmpty(data.company) ? data.company : "";
    data.description = !isEmpty(data.description) ? data.description : "";
    data.experienceRequired = !isEmpty(data.experienceRequired) ? data.experienceRequired : "";
    data.workingTime = !isEmpty(data.workingTime) ? data.workingTime : "";
    data.startAt = !isEmpty(data.startAt) ? data.startAt : "";
    data.income = !isEmpty(data.income) ? data.income : "";
    data.localisation = !isEmpty(data.income) ? data.income : "";


    if (Validator.isEmpty(data.title)) {
        errors.email = "Un email est requis";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}


exports.validateLoginInput = (data) => {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if (Validator.isEmpty(data.email)) {
        errors.email = "L'email est requis";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Le mot de passe est requis";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Veuillez fournir une adresse email correcte";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}



const Validator = require("validator").default;
const isEmpty = require("is-empty");

exports.validatePostCompany = (data) => {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.image = !isEmpty(data.image) ? data.image : "";


    if (Validator.isEmpty(data.name)) {
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



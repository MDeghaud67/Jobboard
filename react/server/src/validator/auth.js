const Validator = require("validator").default;
const isEmpty = require("is-empty");

exports.validateRegisterInput = (data) => {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.first_name = !isEmpty(data.first_name) ? data.first_name : "";
    data.last_name = !isEmpty(data.last_name) ? data.last_name : "";


    if (Validator.isEmpty(data.email)) {
        errors.email = "Un email est requis";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Un email valide est requis !";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Un mot de passe est requis";
    } else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Le mot de passe doit faire entre 6 et 30 caractéres";
    }

    if (Validator.isEmpty(data.first_name)) {
        errors.first_name = "Un Prénom  est requis";
    }

    if (Validator.isEmpty(data.last_name)) {
        errors.last_name = "Un Nom est requis";
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


exports.validateResetPasswordLinkInput = (data) => {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";

    if (Validator.isEmpty(data.email)) {
        errors.email = "L'email est requis";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Veuillez fournir une adresse email correcte";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

exports.validateResetPasswordInput = (data) => {
    let errors = {};
    data.password = !isEmpty(data.password) ? data.password : "";

    if (Validator.isEmpty(data.password)) {
        errors.password = "Un mot de passe est requis";
    } else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Le mot de passe doit faire entre 6 et 30 caractéres";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}


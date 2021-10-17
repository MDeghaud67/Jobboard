export const NOT_FOUND = "NOT_FOUND";
export const REGISTER_SUCCESSFULL = "REGISTER_SUCCESFULL";
export const LOGIN_SUCCESSFULL = "LOGIN_SUCCESSFULL";
export const APPLY_SUCCESSFULL = "APPLY_SUCCESSFULL";
export const LOGOUT = "LOGOUT";
export const CRUD_DELETE = "CRUD_DELETED";
export const CRUD_CREATE = "CRUD_CREATE";
export const CRUD_UPDATE = "CRUD_UPDATE";

export default function makeToast(type) {
    switch (type) {
        case NOT_FOUND:
            return [
                "La page n'existe pas",
                { appearance: "error" }
            ]
        case REGISTER_SUCCESSFULL:
            return [
                "Votre compte a bién été créer, vous pouvez maitenant vous connectez.",
                { appearance: "success" }
            ]
        case APPLY_SUCCESSFULL:
            return [
                'Apply successfull',
                { appareance : "success"}
            ]
        case LOGIN_SUCCESSFULL:
            return [
                "Connexion réussie",
                { appearance: "success" }
            ]
        case LOGOUT:
            return [
                "Déconnexion réussie",
                { appearance: "success" }
            ]
        case CRUD_DELETE:
            return [
                "Entité supprimé",
                { appearance: "success"}
            ]
        case CRUD_CREATE:
            return [
                "Entité créer",
                { appareance: "success"}
            ]
        case CRUD_UPDATE:
            return [
                "Entité Update",
                { appareance: "error"}
            ]
    }
}
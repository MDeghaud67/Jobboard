import React from "react";
import { Route } from "react-router-dom";
import AuthentificationProvider from "./AuthentificationProvider";


const AuthentificatedRoute = ({ component, redirectTo = "/login", needAdmin, animated = false, ...rest }) => {
    return (
        <div>
            <Route
                {...rest}
                render={(props) => <AuthentificationProvider redirect={redirectTo} {...props} needAdmin animated component={component} />}
            />
        </div>
    )
}



export default AuthentificatedRoute;
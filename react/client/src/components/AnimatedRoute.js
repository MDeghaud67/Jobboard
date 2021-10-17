import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'


const AnimatedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
        >
            {({ match }) => (
                <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                >
                    <Component/>
                </CSSTransition>

            )}
        </Route>
    )
}

export default AnimatedRoute;
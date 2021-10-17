import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from "react-router";
import { getProfile } from "../utils/ajax";
import { eraseAuthToken, hasAuthToken } from "../utils/jwt";
import { onLogin } from "slices/user";
import { CSSTransition } from 'react-transition-group'

const AuthentificationProvider = ({ component: Component, redirect, needAdmin, animated, ...rest }) => {
    const { match } = rest;
    let user = useSelector((state) => state.user);
    const [needRedirect, setNeedRedirect] = useState(false);
    const [done, setDone] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (needAdmin) {
            if (!user.data || !user.data.isAdmin) {
                setNeedRedirect(true);
                setDone(true);
                return;
            }
        }
        if (!user.authentificated) {
            if (!hasAuthToken()) {
                setNeedRedirect(true);
                setDone(true);
            } else {
                getProfile().then(res => {
                    dispatch(onLogin(res));
                    setNeedRedirect(false);
                    setDone(true);
                }).catch(err => {
                    eraseAuthToken();
                    setNeedRedirect(true);
                    setDone(true);
                })
            }
        } else {
            setNeedRedirect(false);
            setDone(true);
        }
    }, [user.authentificated]);

    return (
        <div>
            {done ? needRedirect ? <Redirect to={redirect} /> : animated ? 
                <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                >
                    <Component {...rest} />
                </CSSTransition> : <Component {...rest} /> : <div className="main-loader loading"></div>}
        </div>
    )
}

export default AuthentificationProvider;
import React from "react";
import "style/App.css";
import "assets/scss/material-kit-react.scss";

import { BrowserRouter as Router } from "react-router-dom";
import { ToastProvider } from 'react-toast-notifications';


import Header from "components/Header/Header";
import Toast from "components/Toast";


import Home from "pages/Home";
import Job from "pages/Job";
import CompanyJobs from "pages/CompanyJobs";
import Login from "pages/Login";
import Register from "pages/Register";
import AnimatedRoute from "components/AnimatedRoute";
import ScrollTop from "components/ScrollTop";
import { getProfile } from "utils/ajax";
import { hasAuthToken } from "utils/jwt";
import { onLogin } from "slices/user";
import { useDispatch } from "react-redux";
import AuthentificatedRoute from "components/AuthentificatedRoute";
import Dashboard from "pages/Dashboard";
import { eraseAuthToken } from "utils/jwt";



function App() {
    const dispatch = useDispatch();
    const [done, setDone] = React.useState(false);
    React.useEffect(() => {
        if (hasAuthToken()) {
            getProfile().then(res => {
                dispatch(onLogin(res));
                setDone(true);
            }).catch(async err => {
                await eraseAuthToken();
                setDone(true);
            })
        } else {
            setDone(true);
        }
    }, []);
    return (
        <div>
            {done ?
                <ToastProvider
                    autoDismiss={true}
                    autoDismissTimeout={2000}
                    placement="bottom-right"
                >
                    <Router>
                        <ScrollTop />
                        <Toast />
                        <Header
                            brand="Jobboard"
                            color="dark"
                            changeColorOnScroll={{
                                height: 400,
                                color: "white",
                            }}
                        />
                        <AnimatedRoute exact path="/" component={Home} />
                        <AnimatedRoute exact path="/login" component={Login} />
                        <AnimatedRoute exact path="/register" component={Register} />
                        <AnimatedRoute exact path="/job/:id" component={Job} />
                        <AnimatedRoute exact path="/company-job/:company" component={CompanyJobs} />
                        <AuthentificatedRoute animated={true} needAdmin={true} path="/admin" component={Dashboard} />
                    </Router>
                </ToastProvider>
                : <div className="loading"></div>}
        </div>
    )
}

export default App;

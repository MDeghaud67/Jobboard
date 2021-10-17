import React, { useEffect } from "react";
import { useToasts } from 'react-toast-notifications';
import makeToast from "../utils/toast";
import { useLocation } from "react-router";




const Toast = () => {
    const { addToast } = useToasts();
    const { state } = useLocation();
    let toast = null;
    if (state && state.toast) {
        toast = state.toast;
    }

    useEffect(() => {
        if (toast) {
            addToast( ...makeToast(toast));
        }
    }, [state]);

    return (
        <div>
        </div>
    )
}



export default Toast;
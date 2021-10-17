export const hasAuthToken = () => {
    return localStorage.getItem('token') !== null;
}

export const eraseAuthToken = () => {
    localStorage.removeItem("token");
}

export const setAuthToken = async (token) => {
    await localStorage.setItem("token", token);
}

export const getAuthToken = () => {
    return JSON.parse(JSON.stringify(localStorage.getItem('token')));
}
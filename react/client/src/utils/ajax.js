import { getAuthToken } from "./jwt";


const apiLocation = process.env.REACT_APP_APILOCATION


// Token functions

function setHeaderToken() {
    return {
        'Authorization': 'Bearer ' + getAuthToken()
    }
};


export function getProfile() {
    return get("/auth", true);
}

export function login(body) {
    return post("/auth/login", body)
}


export function register(body) {
    return post(`/auth/register`, body);
}


export function getJobs() {
    return get(`/jobs`);
}

export function getJob(id) {
    return get(`/job/${id}`)
}


export function applyJob(body) {
    return post('/application', body);
}

export function authApplyJob(body) {
    return post('/auth-application', body, true);
}


export function getJobsByCompany(company) {
    return get(`/job/company/${company}`);
}


export function getCompanyImage(name) {
    return `${apiLocation}/file/company-image/${name}`;
}

export function getAdminsData() {
    return get("/datas", true);
}

// CRUD

export function createUser(body) {
    return post(`/user`, body, true);
}

export function updateUser(id, body) {
    return put(`/user/${id}`, body, true);
}

export function deleteUser(id) {
    return deleteRequest(`/user/${id}`, null, true)
}


export function createJob(body) {
    return post(`/job`, body, true);
}

export function updateJob(id, body) {
    return put(`/job/${id}`, body, true);
}

export function deleteJob(id) {
    return deleteRequest(`/job/${id}`, null, true);
}


export function createCompany(body) {
    return postFormData(`/company`, body, true)
}

export function updateCompany(id, body) {
    return put(`/company/${id}`, body, true);
}

export function deleteCompany(id) {
    return deleteRequest(`/company/${id}`, null, true);
}


function get(path, needAuth = false) {
    let defaultOptions = {
        headers: {}
    }
    if (needAuth) {
        defaultOptions.headers = {
            ...defaultOptions.headers,
            ...setHeaderToken()
        }
    }

    return fetch(`${apiLocation}${path}`, defaultOptions).then(async res => {
        if (res.ok) {
            return res.json();
        }
        let errors = await new Promise((resolve, reject) => {
            res.json().then(res => {
                resolve(res);
            })
        })
        throw new Error(JSON.stringify(errors?.message));
    });

}

function post(path, body, needAuth = false) {
    return request('POST', path, body, needAuth ? setHeaderToken() : {})
}

function put(path, body, needAuth = false) {
    return request('PUT', path, body, needAuth ? setHeaderToken() : {});
}

function deleteRequest(path, body, needAuth = false) {
    return request("DELETE", path, body, needAuth ? setHeaderToken() : {});
}

function postFormData(path, body, needAuth = false) {
    return formDataRequest('POST', path, body, needAuth ? setHeaderToken() : {})
}



function request(method, path, body, optHeaders = {}) {
    let options = {
        method,
        headers: {
            ...optHeaders
        }
    }


    if (method !== "DELETE") {
        options = {
            ...options,
            headers: {
                "Content-type": 'application/json',
                ...options.headers
            },
            body: JSON.stringify(body)
        }
    }


    return fetch(`${apiLocation}${path}`, options).then(async res => {
        if (res.ok) {
            return res.json();
        }
        let errors = await new Promise((resolve, reject) => {
            res.json().then(res => {
                resolve(res);
            })
        })
        throw new Error(JSON.stringify(errors?.message));
    });
}


function formDataRequest(method, path, formData, optHeaders = {}) {
    const options = {
        method,
        headers: {
            ...optHeaders,
        },
        body: formData
    }

    return fetch(`${apiLocation}${path}`, options).then(async res => {
        if (res.ok) {
            return res.json();
        }
        let errors = await new Promise((resolve, reject) => {
            res.json().then(res => {
                resolve(res);
            })
        })
        throw new Error(JSON.stringify(errors?.message));
    });
}
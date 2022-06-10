const fetch = require('node-fetch');
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

const apiCall = async (path, method, json = null) => {
    if (method == 'POST') {
        console.log(BASE_URL + path)
        return await fetch(BASE_URL + path, {
            method: method,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'macaroon': API_KEY,
                'rejectUnauthorized': false
            },
            credentials: 'include',
            body: JSON.stringify(json),
        });
    } else {
        console.log(BASE_URL + path)
        return await fetch(BASE_URL + path, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                macaroon: API_KEY,
                redirect: 'follow'
            }
        });
    }
};

module.exports = { apiCall };

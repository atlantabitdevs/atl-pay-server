const fetch = require('node-fetch');
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

const apiCall = async (path, method, json = null) => {
    if (json) {
        console.log(BASE_URL + path)
        return await fetch(BASE_URL + path, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                macaroon: API_KEY,
            },
            credentials: 'include',
            body: JSON.stringify(json),
        });
    } else {
        return await fetch(BASE_URL + path, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                macaroon: API_KEY,
            },
            credentials: 'include',
        });
    }
};

module.exports = { apiCall };

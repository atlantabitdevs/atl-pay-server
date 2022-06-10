const fetch = require('node-fetch');
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;
const HEADERS = { 'Content-Type': 'application/json', macaroon: API_KEY };

const apiCall = async (path, method, json = null) => {
    if (method == 'POST') {
        return await fetch(BASE_URL + path, {
            method: method,
            headers: HEADERS,
            body: JSON.stringify(json),
        });
    } else {
        return await fetch(BASE_URL + path, {
            method: method,
            headers: HEADERS,
        });
    }
};

module.exports = { apiCall };

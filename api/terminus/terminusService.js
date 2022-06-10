const debug = require('../../utils/debug');
const offerMap = require('../../utils/offerMap');
const apiCall = require('../../utils/apiCall')
const bitcoiners = require('../../db/collection');
const fetch = require('node-fetch');

const pricing = {
    '1': 60,
    '2': 150,
    '3': 35
}

const profiles = {
    '1': 'pleb',
    '2': 'sovereign',
    '3': 'core-contributor'
}

const getBTCprice = async () => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json()
    return parseFloat(data.bpi.USD.rate.replace(/,/, '')).toFixed(2)
}

const signup = async (info, tier, recurrence) => {
    try {
        const lookipId = tier + recurrence
        const userType = profiles[tier]
        // const offerId = offerMap[lookipId]
        console.log(pricing[tier])
        console.log(await getBTCprice())
        const btc = await getBTCprice()
        const cost = (pricing[tier] / btc) * 100000000
        console.log(cost)
        console.log(`${cost}sats`)
        const res = await apiCall(`/v1/offers/offer`, 'POST', {
            amount: `${cost}sats`,
            description: `tier 1 - ${userType}`,
            vendor: 'Terminus Electric Money Lab',
            label: `tier-${lookipId}:${userType}-${recurrence}-month`
        })
        const offer = res.bolt12
        await bitcoiners.add({ info, tier, recurrence, offer: res,  });
        return { success: true, message: offer };
    } catch (error) {
        debug.error(error.stack, error.status, error.message);
        throw new Error(error);
    }
};

const paid = async (tier, recurrence) => {
    try {
        const offerId = offerMap[tier + recurrence]
        const res = await apiCall(`/v1/offers/listOffers?offer_id=${offerId}`, 'GET')
        const used = res.offers[0].used
        return { success: true, message: used };    
    } catch (error) {
        debug.error(error.stack, error.status, error.message);
        throw new Error(error);
    }
}

module.exports = { signup, paid };

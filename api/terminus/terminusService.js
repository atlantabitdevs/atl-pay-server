const debug = require('../../utils/debug');
const offerMap = require('../../utils/offerMap');
const { apiCall } = require('../../utils/apiCall')
const bitcoiners = require('../../db/collection');

const signup = async (info, tier, recurrence) => {
    try {
        const offerId = offerMap[tier + recurrence]
        console.log(offerId)
        const offer = await apiCall(`/v1/offers/listOffers?offer_id=${offerId}`, 'GET')
        await bitcoiners.add({ info, tier, recurrence, offer: offer[0].bolt12 });
        return { success: true, message: offer[0].bolt12 };
    } catch (error) {
        debug.error(error.stack, error.status, error.message);
        throw new Error(error);
    }
};

const paid = async (tier, recurrence) => {
    try {
        const offerId = offerMap[tier + recurrence]
        const offer = await apiCall(`/v1/offers/listOffers?offer_id=${offerId}`, 'GET')
        return { success: true, message: offer[0].used };
    } catch (error) {
        debug.error(error.stack, error.status, error.message);
        throw new Error(error);
    }
}

module.exports = { signup, paid };

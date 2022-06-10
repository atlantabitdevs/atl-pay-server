const debug = require('../../utils/debug');
const offerMap = require('../../utils/offerMap');
const apiCall = require('../../utils/apiCall')

const signup = async (tier, recurrence) => {
    try {

        // store data in DB?
        const offerId = offerMap[tier + recurrence]
        const offer = await apiCall(`/v1/offers/listOffers?offer_id=${offerId}`, 'GET')
        return { success: true, message: offer.bolt12 };
    } catch (error) {
        debug.error(error.stack, error.status, error.message);
        throw new Error(error);
    }
};

module.exports = { signup };

const debug = require('../../utils/debug');
const { apiCall } = require('../../utils/apiCall')

const signup = async (offerId) => {
    try {
        // store data in DB?
        var lnhash;
        const offers = await apiCall('/offers/listOffers', 'GET')
        for(let offer in offers){
            if(offer.offer_id == offerId){
                lnhash = offer.bolt12
            }
        }
        return { success: true, message: lnhash };
    } catch (error) {
        debug.error(error.stack, error.status, error.message);
        throw new Error(error);
    }
};

module.exports = { signup };

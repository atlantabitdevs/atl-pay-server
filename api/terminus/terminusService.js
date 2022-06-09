const debug = require('../../utils/debug');
const apiCall = require('../../utils/apiCall')

const signup = async (amount, memo) => {
    try {
        const charge = await apiCall('/offers', 'POST', { amount: amount, description: memo })
        return { success: true, message: charge };
    } catch (error) {
        debug.error(error.stack, error.status, error.message);
        throw new Error(error);
    }
};

module.exports = { signup };

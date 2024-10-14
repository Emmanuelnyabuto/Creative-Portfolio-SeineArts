const { createPaymentIntent } = require('../services/paymentService');

const createPayment = async (req, res) => {
    try {
        const { amount, currency } = req.body;
        const paymentIntent = await createPaymentIntent(amount, currency);
        res.status(200).json({ paymentIntent });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createPayment };

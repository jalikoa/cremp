const mongoose = require('mongoose');

const Model = mongoose.model('Invoice');
const ModalPayment = mongoose.model('Payment');

const remove = async (req, res) => {
  return res.status(200).json({
    success: true,
    result: null,
    message: 'Please Upgrade to Premium  Version to have full features',
  });
};

module.exports = remove;

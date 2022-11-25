const mongoose = require('mongoose');

const verificationSchema = new mongoose.Schema(
  {
    code: {
      type: Number,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('verification', verificationSchema);

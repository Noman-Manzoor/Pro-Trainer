const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    learningInterestArea: {
      type: Array,
      required: true,
    },
    newJob: {
      type: String,
      required: true,
    },
    jobSwitch: {
      type: String,
      required: true,
    },
    switchTechnology: {
      type: String,
      required: true,
    },
    betterHike: {
      type: String,
      required: true,
    },
    upSkilling: {
      type: String,
      required: true,
    },
    haveLaptop: {
      type: String,
      required: true,
    },
    haveBroadband: {
      type: String,
      required: true,
    },
    notification: {
      type: String,
      required: true,
    },
    newGroup: {
      type: String,
      required: true,
    },
    trainingRequirement: {
      type: String,
      required: true,
    },
    learningNewLetter: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('students', userSchema);

const mongoose = require("mongoose");

const clientInfoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  priorTanning: {
    type: Boolean,
    required: true,
  },
  pregnantBreastfeed: {
    type: Boolean,
    required: true,
  },
  hasAllergies: {
    type: Boolean,
    required: true,
  },
  allergyDetails: {
    type: String,
    required: false,
  },
  skinCondition: {
    type: Boolean,
    required: true,
  },
  hasSkinCondition: {
    type: String,
    required: false,
  },
  respiratoryIllness: {
    type: Boolean,
    required: true,
  },
  hasRespiratoryIllness: {
    type: String,
    required: false,
  },
  productsOnSkin: {
    type: Boolean,
    required: true,
  },
  exfoliateBefore: {
    type: Boolean,
    required: true,
  },
  recentSunburn: {
    type: Boolean,
    required: true,
  },
  retinolProducts: {
    type: Boolean,
    required: true,
  },
  retinolProductsDetails: {
    type: String,
    required: false,
  },
  hormoneMedications: {
    type: Boolean,
    required: true,
  },
  hormoneMedicationsDetails: {
    type: String,
    required: false,
  },
  skinSensitivity: {
    type: String,
    enum: [
      "Always burn, never tan",
      "Burn, but still can achieve a tan",
      "Tan easily and rarely burn",
    ],
    required: true,
  },
});

const ClientInfo = mongoose.model("ClientInfo", clientInfoSchema);

module.exports = ClientInfo;

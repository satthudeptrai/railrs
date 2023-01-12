import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PaymentTokenModel = new Schema({
  card_token: {
    type: String,
    require: true,
  },
  payment_token: {
    type: String,
    require: true,
  },
  payment_token_id: {
    type: String,
    require: true,
  },
  payment_token_status: {
    type: String,
    enum: [
      "payment-token-status-created",
      "payment-token-status-active",
      "payment-token-status-closed",
      "payment-token-status-awaiting-activation",
      "payment-token-status-suspended",
    ],
    require: true,
  },
  created_at: {
    type: String,
    require: true,
  },
  payment_token_activation_method: {
    type: String,
  },
  payment_token_activation_method_info: {
    type: String,
  },
  payment_token_device_id: {
    type: String,
  },
  payment_token_device_telephone: {
    type: String,
  },
  payment_token_device_type: {
    type: String,
  },
  payment_token_expiry_date: {
    type: String,
  },
  payment_token_status_reason: {
    type: String,
  },
  payment_token_wallet: {
    type: String,
  },
});
module.exports = mongoose.model("PaymentTokenModel", PaymentTokenModel);

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CustomerModel = new Schema({
  customer_id: {
    type: String,
    require: true,
  },
  customer_access_level: {
    type: String,
    enum: [
      "customer.access-level/playlive",
      "customer.access-level/live",
      "customer.access-level/play",
    ],
    require: true,
  },
  customer_status: {
    type: Number,
    enum: [
      "customer.status/invalid-fields",
      "customer.status/disabled",
      "customer.status/ok",
    ],
    require: true,
  },
  api_keys_customer: {
    type: [Object],
    require: true,
  },
  company: {
    type: Object,
    require: true,
  },
  metacustomer_id: {
    type: String,
    require: true,
  },
  screening_monitored_search: {
    type: Boolean,
    require: true,
  },
});
module.exports = mongoose.model("CustomerModel", CustomerModel);

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CardRuleCounterModel = new Schema({
  card_rule_counter: {
    type: Number,
    require: true,
  },
  card_rule_id: {
    type: String,
    require: true,
  },
  card_rule_threshold: {
    type: Number,
    require: true,
  },
});
module.exports = mongoose.model("CardRuleCounterModel", CardRuleCounterModel);

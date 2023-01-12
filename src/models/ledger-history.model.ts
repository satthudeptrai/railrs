import mongoose from "mongoose";
const Schema = mongoose.Schema;

const LedgerHistoryModel = new Schema({
  ledger_entry_id: {
    type: String,
    require: true,
  },
  ledger_entry_type: {
    type: String,
    enum: ["debit", "credit"],
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
  created_at: {
    type: String,
    require: true,
  },
  transaction_id: {
    type: String,
    enum: ["reservation", "financial"]
  },
  ledger_entry_event_type: {
    type: String,
  }
});
module.exports = mongoose.model("LedgerHistoryModel", LedgerHistoryModel);

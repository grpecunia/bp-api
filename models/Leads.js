const mongoose = require("mongoose");

const LeadSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Leads", LeadSchema);

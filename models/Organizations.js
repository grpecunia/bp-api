const mongoose = require('mongoose');


const OrganizationSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  orgType: {
    type: String,
    require: true
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Organizations', OrganizationSchema)
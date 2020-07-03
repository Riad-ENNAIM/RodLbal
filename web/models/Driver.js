const mongoose = require('mongoose');

const DriverSchema = mongoose.Schema({
  zone: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'zones'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('driver', DriverSchema);

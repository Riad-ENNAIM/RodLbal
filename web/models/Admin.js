const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'drivers'
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

module.exports = mongoose.model('admin', AdminSchema);

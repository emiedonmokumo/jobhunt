
const mongoose = require('mongoose');

const TradespersonSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  profilePicture: {
    type: String, 
  },
  objective: {
    type: String,
    trim: true,
  },
  skills: {
    type: [String], 
    required: true,
  },
  experience: [
    {
      company: String,
      role: String,
      startDate: Date,
      endDate: Date,
      description: String,
    },
  ],
  ratings: [
    {
      clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      rating: Number,
      review: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Tradesperson = mongoose.model('Tradesperson', TradespersonSchema);
module.exports = Tradesperson;

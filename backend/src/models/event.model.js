const { Schema, model } = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const eventSchema = new Schema({
  id: { type: String },
  title: {
    type: String,
    required: true,
  },
  date: { type: String, required: true },
});

eventSchema.pre('save', function (next) {
  this.id = uuidv4();
  next();
});

module.exports = model('Event', eventSchema);

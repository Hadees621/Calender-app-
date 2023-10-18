const eventSchema = require('../models/event.model');

module.exports = {
  createEvent: async function (req, res) {
    try {
      const data = req.body;
      const event = new eventSchema(data);
      await event.save();
      res.json({
        success: true,
        message: 'Event created successfully!',
        data: event,
      });
    } catch (ex) {
      res.json({ success: false, message: ex.message, data: null });
    }
  },
  getEvents: async function (req, res) {
    try {
      const events = await eventSchema.find();
      res.json({
        success: true,
        message: 'Events retrieved successfully!',
        data: events,
      });
    } catch (ex) {
      res.json({ success: false, message: ex.message, data: null });
    }
  },
};

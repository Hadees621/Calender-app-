const eventRoute = require('./routes/event.route');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('./config/db.config');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend's URL
  credentials: true, 
}));

app.use('/api/', eventRoute);

mongoose.connection.on('error', (error) => {
  console.log(`Mongodb connection error: ${error}`);
});

mongoose.connection.once('open', () => {
  console.log(`Mongodb connection established`);
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});

const mongoose = require('mongoose');

if (mongoose.connection.readyState === 0) {
  mongoose.connect(
    'mongodb+srv://hadees432:bu97mSwL7iauyhWJ@cluster0.nkauvdq.mongodb.net/?retryWrites=true&w=majority'
  );
}

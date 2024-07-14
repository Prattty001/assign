// db.js

const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://admin:Prat@cluster0.mxz9pzr.mongodb.net/scheduledMessages';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Remove useCreateIndex and useFindAndModify
      // These options are now set directly in the connection string
      // useCreateIndex: true,
      // useFindAndModify: false,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

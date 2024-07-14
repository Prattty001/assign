// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS middleware
const connectDB = require('./db');
const scheduledMessagesRoutes = require('./routes/scheduledMessages');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use CORS middleware to allow all origins
// If needed, you can specify options like origin, methods, etc. in cors()

// Routes
app.use('/api/scheduledMessages', scheduledMessagesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

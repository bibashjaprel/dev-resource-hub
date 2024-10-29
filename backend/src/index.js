const express = require('express');
const connectDB = require('./dbconfig/dbConfig');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to the database
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: "This is the dev environment." });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});

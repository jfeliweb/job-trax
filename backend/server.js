const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load Database
const connectDB = require('./config/db');

// Load ENV
dotenv.config({
	path: './config/config.env',
});

// Connect to Mongoose
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
	console.log(`Server started on port: ${port}`);
});

const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open',() => {
	console.log('Connection established successfully');
});

const userRouter = require('./routes/users');
app.use('/users',userRouter);

app.listen(port,() => {
	console.log(`Server is running at port ${port}`);
});
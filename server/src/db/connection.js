const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
});
const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
    return mongoose.connect(`mongodb://localhost:27017/pizza_store`, { useNewUrlParser: true, useUnifiedTopology: true });
};
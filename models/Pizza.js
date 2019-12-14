const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const pizzaSchema = new Schema({

    description: {
        type: String,
        unique: true,
        required: true,
    },

    price: {
        type: String,
        require: true
    },

    name: {
        type: String,
        unique: true,
        require: true
    },

    image: {
        type: String,
        unique: true,
        require: true
    },

});

module.exports = new Model('Pizza', pizzaSchema);
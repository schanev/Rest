const models = require('../models');
const ObjectId = require('mongodb').ObjectId; 

module.exports = {
  get: (req, res, next) => {
    models.Pizza.find()
      .then((pizzas) => res.send(pizzas))
      .catch(next)
  },
  getById: (req, res, next) => {
    const id = new ObjectId(req.params.id);

    models.Pizza.find({_id:id})
      .then((pizza) => res.send(pizza))
      .catch(next)
   }
};
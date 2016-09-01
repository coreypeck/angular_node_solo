/**
 * Book model for Mongoose
 */

// Step 0 - Get our dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Comment = require('./comment').schema;

// Step 1 - Create the Schema
var heroSchema = new Schema({
  alias: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  city: { type: String, required: true },
  power_name: { type: String, required: true }
});

// Step 2 - Create the model
var Hero = mongoose.model('Hero', heroSchema);

// Step 3 - Export our model so we can use it in other parts of our app
module.exports = Hero;

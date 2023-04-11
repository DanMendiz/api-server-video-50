const mongoose = require('mongoose');
//destructuring the schema creator
const {
  Schema,
  //
} = mongoose;
// Schema -- 	There to enforce data purity aka constraints (types)
//You can think of a Mongoose schema as the configuration object for a Mongoose model.
const TodoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

// Mongoose model
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;

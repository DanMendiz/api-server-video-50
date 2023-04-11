// Middleware functions that will respond to the routes and save to the database

const Todo = require('../models/todo.model');

// GET [Read]
exports.getTodos = async (req, res) => {
  // route is the URL here; controller is the function;
  let query = {};
  if (req.params.id) {
    query._id = req.params.id;
  }
  try {
    const todos = await Todo.find(query); // here is the model being used
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).send(err);
  }
};

// POST [Create]
exports.addTodo = async (req, res) => {
  const todoData = req.body;
  console.log('todoData', todoData);
  try {
    const newTodo = new Todo(todoData);
    const result = await newTodo.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

// PUT [Update]
exports.updateTodo = async (req, res) => {
  try {
    const result = await Todo.updateOne({ _id: req.params.id }, req.body);
    if (result.n === 0) return res.sendStatus(404);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
};

// DELETE [Delete]
exports.removeTodo = async (req, res) => {
  try {
    const result = await Todo.deleteOne({ _id: req.params.id });
    if (result.n === 0) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err);
  }
};
// controllers/category.controller.js
const CategoryService = require('../services/category.service');
const Joi = require('joi');

const categorySchema = Joi.object({
  categoriaId: Joi.number().integer().positive().required(),
  code: Joi.string().max(255).required(),
  name: Joi.string().max(255).required(),
  description: Joi.string().max(255).required(),
});

exports.createCategory = async (req, res) => {
  const { error } = categorySchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const category = await CategoryService.createCategory(req.body);
    res.status(201).send(category);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryService.getAllCategories();
    res.send(categories);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await CategoryService.getCategoryById(req.params.id);
    if (!category) return res.status(404).send('Categoría no encontrada');
    res.send(category);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.updateCategory = async (req, res) => {
  const { error } = categorySchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const updated = await CategoryService.updateCategory(req.params.id, req.body);
    if (updated[0] === 0) return res.status(404).send('Categoría no encontrada');
    res.send('Categoría actualizada exitosamente');
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const deleted = await CategoryService.deleteCategory(req.params.id);
    if (deleted === 0) return res.status(404).send('Categoría no encontrada');
    res.send('Categoría eliminada exitosamente');
  } catch (err) {
    res.status(400).send(err.message);
  }
};

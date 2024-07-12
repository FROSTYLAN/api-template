// controllers/product.controller.js
const ProductService = require('../services/product.service');
const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  price: Joi.number().positive().required(),
  description: Joi.string().max(1024).optional(),
  stock: Joi.number().integer().min(0).required(),
});

exports.createProduct = async (req, res) => {
  const { error } = productSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const product = await ProductService.createProduct(req.body);
    res.status(201).send(product);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductService.getAllProducts();
    res.send(products);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await ProductService.getProductById(req.params.id);
    if (!product) return res.status(404).send('Producto no encontrado');
    res.send(product);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.updateProduct = async (req, res) => {
  const { error } = productSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const updated = await ProductService.updateProduct(req.params.id, req.body);
    if (updated[0] === 0) return res.status(404).send('Producto no encontrado');
    res.send('Producto actualizado exitosamente');
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await ProductService.deleteProduct(req.params.id);
    if (deleted === 0) return res.status(404).send('Producto no encontrado');
    res.send('Producto eliminado exitosamente');
  } catch (err) {
    res.status(400).send(err.message);
  }
};

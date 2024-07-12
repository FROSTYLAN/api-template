// services/product.service.js
const Product = require('../models/product.model');

exports.createProduct = async (productData) => {
  return await Product.create(productData);
};

exports.getAllProducts = async () => {
  return await Product.findAll();
};

exports.getProductById = async (productId) => {
  return await Product.findByPk(productId);
};

exports.updateProduct = async (productId, productData) => {
  return await Product.update(productData, { where: { id: productId } });
};

exports.deleteProduct = async (productId) => {
  return await Product.destroy({ where: { id: productId } });
};

// services/category.service.js
const Category = require('../models/category.model');

exports.createCategory = async (categoryData) => {
  return await Category.create(categoryData);
};

exports.getAllCategories = async () => {
  return await Category.findAll();
};

exports.getCategoryById = async (categoryId) => {
  return await Category.findByPk(categoryId);
};

exports.updateCategory = async (categoryId, categoryData) => {
  return await Category.update(categoryData, { where: { id: categoryId } });
};

exports.deleteCategory = async (categoryId) => {
  return await Category.destroy({ where: { id: categoryId } });
};

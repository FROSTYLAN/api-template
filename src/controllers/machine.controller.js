// controllers/machine.controller.js
const MachineService = require('../services/machine.service');
const Joi = require('joi');

const machineSchema = Joi.object({
  maquinariaId: Joi.number().integer().positive(),
  categoriaId: Joi.number().integer().positive().required(),
  code: Joi.string().max(255).required(),
  name: Joi.string().max(255).required(),
  brand: Joi.string().max(255).required(),
  model: Joi.string().max(255).required(),
});

exports.createMachine = async (req, res) => {
  const { error } = machineSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const machine = await MachineService.createMachine(req.body);
    res.status(201).send(machine);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getAllMachines = async (req, res) => {
  try {
    const machines = await MachineService.getAllMachines();
    res.send(machines);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getMachineById = async (req, res) => {
  try {
    const machine = await ProductService.getMachineById(req.params.id);
    if (!machine) return res.status(404).send('Máquina no encontrada');
    res.send(machine);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.updateMachine = async (req, res) => {
  const { error } = machineSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const updated = await MachineService.updateMachine(req.params.id, req.body);
    if (updated[0] === 0) return res.status(404).send('Máquina no encontrada');
    res.send('Máquina actualizada exitosamente');
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.deleteMachine = async (req, res) => {
  try {
    const deleted = await MachineService.deleteMachine(req.params.id);
    if (deleted === 0) return res.status(404).send('Máquina no encontrada');
    res.send('Máquina eliminada exitosamente');
  } catch (err) {
    res.status(400).send(err.message);
  }
};

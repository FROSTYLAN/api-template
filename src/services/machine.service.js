// services/machine.service.js
const Machine = require('../models/machine.model');

exports.createMachine = async (machineData) => {
  return await Machine.create(machineData);
};

exports.getAllMachines = async () => {
  return await Machine.findAll();
};

exports.getMachineById = async (machineId) => {
  return await Machine.findByPk(machineId);
};

exports.updateMachine = async (machineId, machineData) => {
  return await Machine.update(machineData, { where: { id: machineId } });
};

exports.deleteMachine = async (machineId) => {
  return await Machine.destroy({ where: { id: machineId } });
};

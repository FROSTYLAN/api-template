// routes/product.routes.js
const express = require('express');
const router = express.Router();
const MachineController = require('../controllers/machine.controller');

/**
 * @swagger
 * tags:
 *   name: Machines
 *   description: Endpoints para la gestión de maquinaria
 */

/**
 * @swagger
 * /api/machines:
 *   post:
 *     tags: [Machines]
 *     summary: Crear una nueva máquina
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 example: "MAC001"
 *               name:
 *                 type: string
 *                 example: "Máquina A1"
 *               brand:
 *                 type: string
 *                 example: "Acme"
 *               model:
 *                 type: string
 *                 example: "AX3000"
 *     responses:
 *       201:
 *         description: Máquina creada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/', MachineController.createMachine);

/**
 * @swagger
 * /api/machines:
 *   get:
 *     tags: [Machines]
 *     summary: Obtener toda la maquinaria
 *     responses:
 *       200:
 *         description: Lista de maquinaria
 *       400:
 *         description: Error en la solicitud
 */
router.get('/', MachineController.getAllMachines);

/**
 * @swagger
 * /api/machines/{id}:
 *   get:
 *     tags: [Machines]
 *     summary: Obtener una máquina por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la máquina
 *     responses:
 *       200:
 *         description: Máquina encontrada
 *       404:
 *         description: Máquina no encontrada
 *       400:
 *         description: Error en la solicitud
 */
router.get('/:id', MachineController.getMachineById);

/**
 * @swagger
 * /api/machines/{id}:
 *   put:
 *     tags: [Machines]
 *     summary: Actualizar una máquina
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la máquina
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 example: "MAC001 Actualizado"
 *               name:
 *                 type: string
 *                 example: "Máquina A1 Actualizado"
 *               brand:
 *                 type: string
 *                 example: "Acme"
 *               model:
 *                 type: string
 *                 example: "AX3000"
 *     responses:
 *       200:
 *         description: Máquina actualizada exitosamente
 *       404:
 *         description: Máquina no encontrada
 *       400:
 *         description: Error en la solicitud
 */
router.put('/:id', MachineController.updateMachine);

/**
 * @swagger
 * /api/machines/{id}:
 *   delete:
 *     tags: [Machines]
 *     summary: Eliminar una máquina
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la máquina
 *     responses:
 *       200:
 *         description: Máquina eliminada exitosamente
 *       404:
 *         description: Máquina no encontrada
 *       400:
 *         description: Error en la solicitud
 */
router.delete('/:id', MachineController.deleteMachine);

module.exports = router;

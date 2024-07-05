const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const registerSchema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(5).max(255).email().required(),
    password: Joi.string().min(6).max(1024).required()
});

exports.register = async (req, res) => {
    // Validar los datos antes de crear un usuario
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { name, email, password } = req.body;

    // Verificar si el usuario ya existe
    const emailExist = await User.findOne({ where: { email } });
    if (emailExist) return res.status(400).send('El email ya existe');

    // Hashear la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Crear un nuevo usuario
    const user = User.build({ name, email, password: hashedPassword });

    try {
        const savedUser = await user.save();
        res.send({ user: savedUser.id });
    } catch (err) {
        res.status(400).send(err);
    }
};

const loginSchema = Joi.object({
    email: Joi.string().min(5).max(255).email().required(),
    password: Joi.string().min(6).max(1024).required()
});

exports.login = async (req, res) => {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const { email, password } = req.body;

    // Verificar si el email existe
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).send('El email no está registrado');

    // Verificar la contraseña
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(400).send('Contraseña incorrecta');

    // Crear y asignar un token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.header('auth-token', token).send(token);
};

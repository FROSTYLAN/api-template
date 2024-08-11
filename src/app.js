const express = require("express");
const dotenv = require("dotenv");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Configurar CORS
app.use(cors());

// Configuración de la base de datos
const sequelize = require('./utils/database.util');

// Associations
const Machine = require("./models/machine.model");
const Category = require("./models/category.model");

Machine.belongsTo(Category, { foreignKey: 'categoriaId', as: 'categoria' });
Category.hasMany(Machine, { foreignKey: 'categoryId', as: 'maquinarias' });

// Verificar conexión a la base de datos
sequelize
  .authenticate()
  .then(() => console.log("Conectado a la base de datos PostgreSQL"))
  .catch((err) => console.error("No se pudo conectar a la base de datos", err));

sequelize
  .sync(
    // { force: true }
  )
  .then(() => console.log("Modelos sincronizados con la base de datos"))
  .catch((err) => console.error("Error al sincronizar los modelos", err));

// Configuración de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API de Cadena de Suministro",
      version: "1.0.0",
      description: "API para manejar todos los procesos de cadena de suministro",
    },
    servers: [{ url: process.env.URL_API }],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rutas
const authRoutes = require("./routes/auth.routes");
const categoryRoutes = require('./routes/category.routes');
const machineRoutes = require('./routes/machine.routes');

app.use("/api/auth", authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/machines', machineRoutes);

// Escuchando puerto de entrada
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

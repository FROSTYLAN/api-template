# ⛓️ API Template para Cadena de Suministro (Express + Sequelize + PostgreSQL)

API REST para gestionar procesos clave de una cadena de suministro: autenticación de usuarios, categorías y maquinaria. Incluye documentación interactiva con Swagger, validaciones con Joi y persistencia en PostgreSQL mediante Sequelize.

---

## 🧭 Módulos / Rutas principales

- `/api/auth` — Registro e inicio de sesión de usuarios (JWT).
- `/api/categories` — CRUD de categorías.
- `/api/machines` — CRUD de maquinaria con relación a categorías.
- `/api-docs` — Documentación interactiva Swagger (OpenAPI 3).

---

## 🌟 Características

- Endpoints REST con `Express` y `CORS` habilitado.
- Autenticación con `JWT` y validación de datos con `Joi`.
- ORM `Sequelize` con `PostgreSQL` y asociación `Category ↔ Machine`.
- Documentación automática con `swagger-jsdoc` y `swagger-ui-express`.
- Carga de variables de entorno con `dotenv`.
- Estructura modular: rutas, controladores, servicios y modelos.

---

## 🖼️ Vista previa

*(Agrega aquí una imagen o GIF de la app cuando tengas una build estable)*  
```md
![Swagger Docs](./docs/preview.png)
```

---

## 🚀 Demo en Vivo

💡 *Próximamente (despliegue en progreso).* 

---

## 🛠️ Tecnologías utilizadas

* **Express 4** — Framework para APIs.
* **Sequelize 6** — ORM para PostgreSQL.
* **PostgreSQL** — Base de datos relacional.
* **Swagger JS Doc** y **Swagger UI Express** — Documentación OpenAPI.
* **Joi** — Validación de esquemas.
* **JSON Web Token (JWT)** — Autenticación.
* **dotenv** — Variables de entorno.
* **CORS** — Control de acceso.
* **Nodemon** — Desarrollo en caliente.
* **Jest / Supertest** — Dependencias para pruebas (configuración opcional).

---

## 📁 Estructura general del proyecto

```bash
api-template/
├── src/
│   ├── app.js                  # Configuración del servidor, Swagger y rutas
│   ├── controllers/            # Lógica de negocio por recurso
│   │   ├── auth.controller.js
│   │   ├── category.controller.js
│   │   └── machine.controller.js
│   ├── routes/                 # Definición de endpoints
│   │   ├── auth.routes.js
│   │   ├── category.routes.js
│   │   └── machine.routes.js
│   ├── services/               # Acceso a modelos/DB (Sequelize)
│   │   ├── category.service.js
│   │   └── machine.service.js
│   ├── models/                 # Modelos Sequelize
│   │   ├── user.model.js
│   │   ├── category.model.js
│   │   └── machine.model.js
│   └── utils/
│       └── database.util.js    # Inicialización de Sequelize
├── tests/
│   └── conection.test.js       # Comprobación de conexión a PostgreSQL
├── .env                         # Variables de entorno (no versionado)
├── package.json
├── README.md
├── LICENSE
└── .gitignore
```

---

## ⚙️ Instalación y uso

**Requisitos:** `Node.js >= 18`, `npm`, y una instancia de `PostgreSQL` accesible.

1. Configurar variables de entorno (`.env`):

   ```env
   PORT=3000
   URL_API=http://localhost:3000
   DB_CONNECTION_STRING=postgres://usuario:password@host:puerto/base
   JWT_SECRET=tu_secreto_seguro
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Iniciar servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Documentación Swagger en `http://localhost:3000/api-docs`.

4. Iniciar en producción:

   ```bash
   npm start
   ```

5. Prueba de conexión (opcional):

   ```bash
   node tests/conection.test.js
   ```

---

## 🎯 Funcionalidades clave

* Registro e inicio de sesión con JWT.
* CRUD de categorías.
* CRUD de maquinaria asociada a categorías.
* Documentación de endpoints con Swagger.
* Validación robusta de entrada con Joi.

---

## ⚠️ Consideraciones y límites actuales

* `sequelize.sync({ force: true })` está habilitado: recrea esquemas y elimina datos en cada arranque. Ajusta según tu entorno.
* Se requiere `DB_CONNECTION_STRING` válido para conectar a PostgreSQL.
* La API no incluye frontend: consumo vía clientes HTTP (Postman, cURL) o Swagger UI.

---

## 🔧 Posibles mejoras

* [ ] Desactivar `force: true` y usar migraciones/seeders.
* [ ] Paginación, filtros y ordenamiento en listados.
* [ ] Control de acceso por roles (RBAC).
* [ ] Soft deletes y auditoría.
* [ ] Manejo centralizado de errores y validaciones.
* [ ] Rate limiting y seguridad adicional.
* [ ] Docker Compose para base de datos y API.
* [ ] CI/CD y pruebas automáticas (Jest/Supertest).

---

## 💡 Aprendizajes

* Integración de Express con Sequelize y PostgreSQL.
* Documentación de APIs con OpenAPI/Swagger.
* Validación declarativa con Joi y autenticación JWT.
* Estructura modular para escalar nuevos recursos fácilmente.

---

## 📄 Licencia

Licencia **ISC**. Consulta el archivo `LICENSE` en el repositorio.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas:

1. Fork del repositorio.
2. Crea una rama: `git checkout -b feature/mi-mejora`.
3. Commit: `git commit -m "feat: añade mejora X"`.
4. Push: `git push origin feature/mi-mejora`.
5. Abre un Pull Request.

---

## 👨‍💻 Autor

**Charles Castillo (FROSTYLAN)**

* 🌐 `https://github.com/FROSTYLAN`
* 💼 `https://linkedin.com/in/charles-castillo-772968234`

---

⭐ *Si te resultó útil, considera dar una estrella al repositorio.*  
🚀 ¡Construye, documenta y escala tu API de cadena de suministro!

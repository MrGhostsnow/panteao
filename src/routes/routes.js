const routes = require('express').Router();
const GodsController = require("../controllers/GodsController");



routes.get("/", GodsController.getAll);
routes.get("/cadastro", GodsController.cadastro);
routes.post("/create", GodsController.create);
routes.get("/getById/:id/:method", GodsController.getById);
routes.post("/update/:id", GodsController.update);
routes.get("/remove/:id", GodsController.remove);
routes.post("/search", GodsController.searchByName);
routes.get("/detalhes/:id", GodsController.detalhes);

module.exports = routes;
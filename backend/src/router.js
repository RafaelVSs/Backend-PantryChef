const express = require('express');
const pantryController = require('./controllers/pantryController');
const pantryMiddleware = require('./middlewares/pantryMiddleware');

const router = express.Router();

router.post('/mostrarUsuario', pantryController.mostrarUsuario);
router.get('/usuarios', pantryController.mostrarUsuario);
router.get('/todosAlimentos', pantryController.getTodosAlimentos);
router.post('/cadastro', pantryMiddleware.validateBody, pantryController.addUsuarios);
router.delete('/usuarios/:id', pantryController.deleteUsuarios);
router.put('/usuarios/:id',pantryMiddleware.validateBody, pantryController.updateUsuarios);
router.get('/todasReceitas', pantryController.mostrarReceitas);
module.exports = router;
const express = require('express');
const pantryController = require('./controllers/pantryController');
const pantryMiddleware = require('./middlewares/pantryMiddleware');

const router = express.Router();

router.get('/mostrarUsuario', pantryMiddleware.verificarAutenticacao, pantryController.mostrarUsuario);
router.get('/todosAlimentos', pantryController.getTodosAlimentos);
router.post('/cadastro', pantryMiddleware.validateBody, pantryController.addUsuarios);
router.delete('/usuario/:id', pantryController.deleteUsuarios);
router.put('/usuario/:id',pantryMiddleware.validateBody, pantryController.updateUsuarios);
router.get('/todasReceitas', pantryController.mostrarReceitas);
module.exports = router;
const express = require('express');
const pantryController = require('./controllers/pantryController');
const pantryMiddleware = require('./middlewares/pantryMiddleware');

const router = express.Router();

router.get('/mostrarTodosUsuarios', pantryController.mostrarTodosUsuarios);
router.get('/todosAlimentos', pantryController.getTodosAlimentos);
router.post('/cadastro', pantryMiddleware.validateBody, pantryController.addUsuarios);
router.delete('/usuarios/:id', pantryController.deleteUsuarios);
router.put('/usuarios/:id',pantryMiddleware.validateBody, pantryController.updateUsuarios);
module.exports = router;
const express = require('express');
const pantryController = require('./controllers/pantryController');

const router = express.Router();

router.get('/todosAlimentos', pantryController.getTodosAlimentos);
router.post('/cadastro', pantryController.addUsuarios);
router.delete('/usuarios/:id', pantryController.deleteUsuarios);
module.exports = router;
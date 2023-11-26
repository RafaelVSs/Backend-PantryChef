const pantryModel = require('../models/pantryModel');

const getTodosAlimentos = async (_req, res) => {
  try {
    const [todosAlimentos] = await pantryModel.getTodosAlimentos(); // Adicione os parênteses ()
    return res.status(200).json(todosAlimentos);
  } catch (error) {
    console.error('Erro na rota getTodosAlimentos:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const addUsuarios = async (req, res) => {
  try {
    const usuario = await pantryModel.addUsuarios(req.body);
    return res.status(201).json(usuario); // Invocar a função json() para enviar o objeto como resposta
  } catch (error) {
    console.error('Erro na rota addUsuarios:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const deleteUsuarios = async (req, res) => {
  const { id } = req.params;

  await pantryModel.deleteUsuarios(id);
  return res.status(204).json();
};

module.exports = {
  getTodosAlimentos,
  addUsuarios,
  deleteUsuarios
};
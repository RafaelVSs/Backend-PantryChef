const pantryModel = require('../models/pantryModel');

const getTodosAlimentos = async (_req, res) => {
  try {
    const [todosAlimentos] = await pantryModel.getTodosAlimentos();
    return res.status(200).json(todosAlimentos);
  } catch (error) {
    console.error('Erro na rota getTodosAlimentos:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const addUsuarios = async (req, res) => {
  try {
    const usuario = await pantryModel.addUsuarios(req.body);
    return res.status(201).json(usuario);
  } catch (error) {
    console.error('Erro na rota addUsuarios:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const deleteUsuarios = async (req, res) => {
  const { id } = req.params;
  try {
    await pantryModel.deleteUsuarios(id);
    return res.status(204).json();
  } catch (error) {
    console.error('Erro na rota deleteUsuarios:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const updateUsuarios = async (req, res) => {
  const { id } = req.params;
  try {
    await pantryModel.updateUsuarios(id, req.body);
    return res.status(204).json();
  } catch (error) {
    console.error('Erro na rota updateUsuarios:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const mostrarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await pantryModel.mostrarUsuario(id);
    return res.status(200).json(usuario);
  } catch (error) {
    console.error('Erro na rota mostrarUsuarios:', error);
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }
};

module.exports = {
  getTodosAlimentos,
  addUsuarios,
  deleteUsuarios,
  updateUsuarios,
  mostrarUsuario
};
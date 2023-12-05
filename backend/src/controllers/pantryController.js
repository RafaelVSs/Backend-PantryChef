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
  const { email, senha } = req.query;

  try {
    console.log('Requisição para mostrarUsuario:', req.query);

    const usuario = await pantryModel.mostrarUsuario(email, senha);
    console.log('Usuário encontrado:', usuario);
    if (usuario !== null) {
      // Salva as informações do usuário na sessão (se necessário)
      console.log('Usuário encontrado:', usuario);
      req.session.usuario = usuario;
      return res.status(200).json(usuario);
    } else {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error('Erro na rota de mostrarUsuario:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
};


const mostrarReceitas = async (_req, res) => {
  try {
    const [todasReceitas] = await pantryModel.mostrarReceitas();
    return res.status(200).json(todasReceitas);
  } catch (error) {
    console.error('Erro na rota todasReceitas:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = {
  getTodosAlimentos,
  addUsuarios,
  deleteUsuarios,
  updateUsuarios,
  mostrarUsuario,
  mostrarReceitas
  
};
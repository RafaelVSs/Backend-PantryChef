
const validateBody = (req, res, next) => {
  const { body } = req;
  
  // Verifica se algum campo está ausente
  if (!body.nome || !body.email || !body.senha || !body.data_nascimento || !body.numero || !body.endereco) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos' });
  }
  
  // Se todos os campos estiverem presentes, passa para a próxima middleware
  next();
};

const requireAuth = (req, res, next) => {
  if (!req.session.usuario) {
    return res.status(401).json({ error: 'Usuário não autenticado' });
  }
  next();
};
  

module.exports = {
  validateBody,
  requireAuth
};
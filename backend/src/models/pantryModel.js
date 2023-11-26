const connection = require('./connection');

const getTodosAlimentos = async () => {
  const todosAlimentos = await connection.execute('SELECT * FROM Alimento');
  return todosAlimentos;
};
const addUsuarios = async (usuario) => {
  const { nome, email, senha, data_nascimento, numero, endereco } = usuario;
  const query = 'INSERT INTO Usuarios(nome, email, senha, data_nascimento, numero, endereco) VALUES(?, ?, ?, ?, ?, ?)';
  const [result] = await connection.execute(query, [nome, email, senha, data_nascimento, numero, endereco], { timeout: 5000 });
  return result;
};

const deleteUsuarios = async (id) => {
  const removeUsuario = await connection.execute('DELETE FROM Usuarios WHERE id_usuario = ?', [id]);
  return removeUsuario;
};


module.exports = {
  getTodosAlimentos,
  addUsuarios,
  deleteUsuarios
};
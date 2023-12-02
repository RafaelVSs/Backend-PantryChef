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
  const [removeUsuario] = await connection.execute('DELETE FROM Usuarios WHERE id_usuario = ?', [id]);
  return removeUsuario;
};

const updateUsuarios = async (id, novoUsuario) => {
  const { nome, email, senha, data_nascimento, numero, endereco } = novoUsuario;
  const query = 'UPDATE Usuarios SET nome=?, email=?, senha=?, data_nascimento=?, numero=?, endereco=? WHERE id_usuario=?';
  const [result] = await connection.execute(query, [nome, email, senha, data_nascimento, numero, endereco, id], { timeout: 5000 });
  return result;
};


const mostrarUsuario = async (email, senha) => {
  try {
    const [results] = await connection.execute('SELECT * FROM Usuarios WHERE email = ? AND senha = ?', [email, senha]);

    if (results.length > 0) {
      return results[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error('Erro ao buscar usuário por credenciais no modelo:', error);
    throw error;
  }
};


module.exports = {
  getTodosAlimentos,
  addUsuarios,
  deleteUsuarios,
  updateUsuarios,
  mostrarUsuario
};
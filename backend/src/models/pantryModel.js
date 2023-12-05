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
const mostrarReceitas = async () => {
  try {
    const todasReceitas = await connection.execute('SELECT r.id_receita, r.NomeReceita, GROUP_CONCAT(a.id_alimento SEPARATOR \', \') AS Ingredientes, GROUP_CONCAT(a.nome ORDER BY a.id_alimento SEPARATOR \' \') AS IngredientesSeparados, r.ModoPreparo FROM Receitas r JOIN Alimento a ON FIND_IN_SET(a.id_alimento, REPLACE(r.Ingredientes, \', \', \',\')) GROUP BY r.id_receita', []);
    return todasReceitas;
  } catch (error) {
    console.error('Erro ao executar a consulta:', error);
    throw error;
  }
};

const filtroReceitas = async () => {

};



module.exports = {
  getTodosAlimentos,
  addUsuarios,
  deleteUsuarios,
  updateUsuarios,
  mostrarUsuario,
  mostrarReceitas
};




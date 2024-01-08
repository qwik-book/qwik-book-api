const { buildSchema } = require('graphql');
// Definición del esquema GraphQL
const schema = buildSchema(`
  """Información del personaje"""
  type Character {
    """Identificador del personaje"""
    id: Int
    """Nombre del personaje"""
    name: String
    """Descripción más detallada"""
    description: String
    """Número de episodios en los que ha participado"""
    episodes: Int
    """Más información"""
    url: String
    """Número de votos recibidos"""
    votes: Int
  }

  type Query {
    """Lista de los personajes"""
    characters: [Character]
    """Información del personaje seleccionado por id"""
    character(id: Int!): Character
  }
`);

module.exports = { schema }
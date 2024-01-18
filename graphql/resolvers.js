const { characters } = require('./../db/characters');
// Resolvers
const rootResolvers = {
    characters: () => characters,
    character: ({ id }) => {
      const character = (characters.find((char) => char.id === id));
      return character || { message: 'Personaje no encontrado'}
    },
  };

module.exports = { rootResolvers }
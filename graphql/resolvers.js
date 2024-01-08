const { characters } = require('./../db/characters');
// Resolvers
const rootResolvers = {
    characters: () => characters,
    character: ({ id }) => characters.find((char) => char.id === id),
  };

module.exports = { rootResolvers }
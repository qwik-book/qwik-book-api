const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { schema, rootResolvers } = require('./graphql');
const { characters } = require('./db/characters');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Endpoint para obtener todos los personajes
// Endpoint para obtener instrucciones de uso en formato HTML
app.get('/', (req, res) => {
    const instructions = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>API de Breaking Bad - Instrucciones de Uso</title>
      <style>
        h1 {color:blue;}
      </style>
    </head>
    <body style="margin: 20px">
      <h1>¡Bienvenido a la API de Breaking Bad!</h1>
      <hr/>
      <h4><strong>Endpoint REST para obtener todos los personajes:</strong></h4>
      <p>GET <a href="/characters">/characters</a></p>
      <h4><strong>Endpoint REST para obtener un personaje por su ID:</strong></h4>
      <p>GET <a href="/character/1">/character/&lt;ID&gt;</a> (Ejemplo con id = 1. IDs que existen estarán desde 1 al 8, cualquier otro número inferior al mínimo o superior al máximo dará un error 404)</p>
      <h4><strong>Endpoint GraphQL para consultar personajes:</strong></h4>
      <p>POST /graphql</p><br/>
      <p>Utiliza el Playground de GraphQL en <a href="/graphql">/graphql</a> para realizar consultas.</p>
      <p>¡Disfruta utilizando la API!</p>
    </body>
    </html>
    `;
    res.send(instructions);
  });

// Endpoint para obtener todos los personajes
app.get('/characters', (req, res) => {
  res.json(characters);
});

// Endpoint para obtener un personaje por su ID
app.get('/character/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const character = characters.find((char) => char.id === id);

  if (!character) {
    return res.status(404).json({ message: 'Personaje no encontrado' });
  }

  res.json(character);
});

// Endpoint GraphQL
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: rootResolvers,
    graphiql: true, // Habilitar el Playground de GraphQL
  })
);

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}.
  Para trabajar con la API accedemos a http://localhost:3000`);
});

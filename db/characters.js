// Datos mock de personajes
const characters = [
    {
      id: 1,
      name: 'Walter White',
      description:
        'Profesor de química convertido en fabricante de metanfetaminas.',
      episodes: 62,
      url: 'https://breakingbad.fandom.com/wiki/Walter_White',
      votes: 10,
    },
    {
      id: 2,
      name: 'Jesse Pinkman',
      description: 'Exestudiante de Walter y fabricante de metanfetaminas.',
      episodes: 62,
      url: 'https://breakingbad.fandom.com/wiki/Jesse_Pinkman',
      votes: 8,
    },
    {
      id: 3,
      name: 'Saul Goodman',
      description: 'Abogado astuto y poco convencional.',
      episodes: 43,
      url: 'https://breakingbad.fandom.com/wiki/Saul_Goodman',
      votes: 7,
    },
    {
      id: 4,
      name: 'Hank Schrader',
      description: 'Agente de la DEA y cuñado de Walter White.',
      episodes: 62,
      url: 'https://breakingbad.fandom.com/wiki/Hank_Schrader',
      votes: 9,
    },
    {
      id: 5,
      name: 'Skyler White',
      description: 'Esposa de Walter White.',
      episodes: 62,
      url: 'https://breakingbad.fandom.com/wiki/Skyler_White',
      votes: 6,
    },
    {
      id: 6,
      name: 'Gustavo Fring',
      description: "Dueño de la cadena de restaurantes 'Los Pollos Hermanos'.",
      episodes: 28,
      url: 'https://breakingbad.fandom.com/wiki/Gustavo_Fring',
      votes: 9,
    },
    {
      id: 7,
      name: 'Mike Ehrmantraut',
      description: 'Empleado de Gustavo Fring y ex-policía.',
      episodes: 33,
      url: 'https://breakingbad.fandom.com/wiki/Mike_Ehrmantraut',
      votes: 8,
    },
    {
      id: 8,
      name: 'Tuco Salamanca',
      description: 'Distribuidor de metanfetaminas y jefe de una banda.',
      episodes: 14,
      url: 'https://breakingbad.fandom.com/wiki/Tuco_Salamanca',
      votes: 7,
    },
    {
        "id": 9,
        "name": "Gale Boetticher",
        "description": "Químico y colaborador de Gustavo Fring.",
        "episodes": 14,
        "url": "https://breakingbad.fandom.com/wiki/Gale_Boetticher",
        "votes": 7
      },
      {
        "id": 10,
        "name": "Lydia Rodarte-Quayle",
        "description": "Distribuidora de metilamina y asociada de Gus Fring.",
        "episodes": 20,
        "url": "https://breakingbad.fandom.com/wiki/Lydia_Rodarte-Quayle",
        "votes": 6
      },
      {
        "id": 11,
        "name": "Todd Alquist",
        "description": "Ayudante de Jack Welker y asesino a sueldo.",
        "episodes": 25,
        "url": "https://breakingbad.fandom.com/wiki/Todd_Alquist",
        "votes": 6
      },
      {
        "id": 12,
        "name": "Jack Welker",
        "description": "Líder de una banda de delincuentes.",
        "episodes": 14,
        "url": "https://breakingbad.fandom.com/wiki/Jack_Welker",
        "votes": 5
      },
      {
        "id": 13,
        "name": "Jane Margolis",
        "description": "Novia de Jesse Pinkman y artista.",
        "episodes": 12,
        "url": "https://breakingbad.fandom.com/wiki/Jane_Margolis",
        "votes": 5
      },
      {
        "id": 14,
        "name": "Skinny Pete",
        "description": "Amigo de Jesse Pinkman y traficante de drogas.",
        "episodes": 19,
        "url": "https://breakingbad.fandom.com/wiki/Skinny_Pete",
        "votes": 4
      },
      {
        "id": 15,
        "name": "Badger",
        "description": "Amigo de Jesse Pinkman y traficante de drogas.",
        "episodes": 16,
        "url": "https://breakingbad.fandom.com/wiki/Badger",
        "votes": 4
      },
      {
        "id": 16,
        "name": "Huell Babineaux",
        "description": "Guardaespaldas y ayudante de Saul Goodman.",
        "episodes": 14,
        "url": "https://breakingbad.fandom.com/wiki/Huell_Babineaux",
        "votes": 3
      },
      {
        "id": 17,
        "name": "Marie Schrader",
        "description": "Esposa de Hank Schrader y obsesionada por el color morado.",
        "episodes": 62,
        "url": "https://breakingbad.fandom.com/wiki/Marie_Schrader",
        "votes": 4
      },
      {
        "id": 18,
        "name": "Ted Beneke",
        "description": "Dueño de una empresa de servicios públicos y ex-amante de Skyler White.",
        "episodes": 17,
        "url": "https://breakingbad.fandom.com/wiki/Ted_Beneke",
        "votes": 3
      },
      {
        "id": 19,
        "name": "Donald Margolis",
        "description": "Controlador de tráfico aéreo y padre de Jane Margolis.",
        "episodes": 4,
        "url": "https://breakingbad.fandom.com/wiki/Donald_Margolis",
        "votes": 3
      },
      {
        "id": 20,
        "name": "Gretchen Schwartz",
        "description": "Co-fundadora de Gray Matter Technologies y ex-pareja de Walter White.",
        "episodes": 7,
        "url": "https://breakingbad.fandom.com/wiki/Gretchen_Schwartz",
        "votes": 2
      },
      {
        "id": 21,
        "name": "Elliot Schwartz",
        "description": "Co-fundador de Gray Matter Technologies y ex-compañero de Walter White.",
        "episodes": 6,
        "url": "https://breakingbad.fandom.com/wiki/Elliot_Schwartz",
        "votes": 2
      }
  ];

  module.exports = { characters };
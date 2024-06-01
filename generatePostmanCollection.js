const fs = require('fs');
const { Collection } = require('postman-collection');

// Definir a URL base
const baseUrl = 'http://localhost:5000/api/auth';

// Criar a coleção do Postman
const collection = new Collection({
  info: {
    name: 'MyProject API Collection',
    description: 'Collection for MyProject API',
  },
  item: [
    {
      name: 'Generate Token',
      request: {
        method: 'GET',
        url: `${baseUrl}/generate-token`,
      },
    },
    {
      name: 'Decode Token',
      request: {
        method: 'POST',
        url: `${baseUrl}/decode-token`,
        header: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
        body: {
          mode: 'raw',
          raw: JSON.stringify({
            token: '<YOUR_JWT_TOKEN>',
          }),
        },
      },
    },
  ],
});

// Exportar a coleção para um arquivo JSON
fs.writeFileSync(
  'token.postman_collection.json',
  JSON.stringify(collection.toJSON(), null, 2)
);
console.log('Postman collection generated successfully!');

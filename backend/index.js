const express = require('express');

const app = express();

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELELTE

// Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação, ...)
//  Route Params: request.params (Identificador um recurso na alteração ou remoçãao)
// Body: request.body (Dados para criação ou alteração de um registro)

app.post('/users/:id', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello OmniStack' });
});

app.listen(3333);
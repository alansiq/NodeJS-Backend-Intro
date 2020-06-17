const express = require('express');


const app = express();

app.get('/projects', (request, response) => {
    const {title, owner} = request.query;
    // ?title=Alan&?owner=Alan
    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
});

app.post('/projects', (request, response) => {
    return response.json({response: 'Resposta post'})
})

app.put('/projects/:id', (request, response) => {
    return response.json({response: 'Resposta put'})
})

app.delete('/projects/:id', (request, response) => {
    return response.json({response: 'Resposta delete'})
})



app.listen(3333, () => {
    console.log('Kleber is up and running!')
});
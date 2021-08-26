const { request, response } = require("express");
const app = require("../app")
const movies = require("../models/filmes.json") // importando meu arquivo json dos filmes (que nesse projeto, são os meus dados)


//definir uma rota padrão
const home = (request, response) => {
    response.status(200).send(
     {
        "message": "Olá, pessoa. Seja bem-vinde ao {reprograma} flix <3 <3 <3"
     }
    )
}

const getAll = (request, response) => {
response.status(200).send(movies);
};

const getById = (request, response) => {
    //id solicitado na requisição (resquest)
    const requestedId = request.params.id
    // find((elemento) => elemento + a lógica)
const filteredId = movies.find(movie => movie.id == idRequerido)
   // response.status(200).send(filteredId)

    //enviar resposta
    response.status(200).send(filteredId)
}
const requestedTitle = request.query.title.toLocaleLowerCase()

const getByTitle = (request, response) => {
const filteredTitle = movies.find(movie => movie.title.toLocaleLowerCase().includes(requestedTitle))


if (filteredTitle === "" || filteredTitle === undefined) {
    response.status(404).send({
        "message": "Por favor, insira um titulo válido."
    })
} else {
    response.status(200).send(filteredTitle)
}
}



// definir rota raiz
module.exports = {home, getAll, getById, getByTitle}

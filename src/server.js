const express = require("express");
const request = require("got");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/fight-prediction", async (req, res) => {
  const { pokemonAId, pokemonBId } = req.query;
  if (!pokemonAId || !pokemonBId) return res.status(400).send();

  const { body: pokemonA } = await request.get(
    `http://pokeapi.co/api/v2/pokemon/${pokemonAId}`,
    {
      json: true
    }
  );

  const { body: pokemonB } = await request.get(
    `http://pokeapi.co/api/v2/pokemon/${pokemonBId}`,
    {
      json: true
    }
  );

  if (pokemonA.weight > pokemonB.weight) {
    return res.status(200).send(pokemonA);
  }

  if (pokemonA.weight < pokemonB.weight) {
    return res.status(200).send(pokemonB);
  }

  return res.status(204).send();
});

module.exports = app;

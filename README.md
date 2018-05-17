# Clean Architecture kata: the Pokemon case

> Kata to practice your code design skills.


## Kata

Refactor the code in `src/server.js` using the Clean Architecture pattern. Make sure the tests remain green. TDD is a must!


## Description

This code decides who would win in a fight between two pokemons. It offers a single endpoint `GET /fight-prediction` and takes two query parameters: `pokemonAId` and `pokemonBId`. The endpoint returns the id of the pokemon supposed to win.


## Context

The Clean Architecture allows developpers to organize their code in concentric layers where the **business rules** (called **Entities** or **Domains**) live at the core of applications and do not depend on anything else but themselves.

These rules are orchestrated through controllers (called **Use-cases**) which represent sets of application-specific business rules. Once defined, the **Use-cases** are used by **Adapters** and exposed to the outside world: UI, REST APIs, etc.

More details here: [The Clean Architecture](1).


## Commands

Start the application:
```sh
$ npm start
```

Start the application in watch mode:
```sh
$ npm run watch
```

Run the tests:
```sh
$ npm test
```

Run the tests in watch mode:
```sh
$ npm run test:watch
```


## Hints

Need help to get started? No worries! Here are a few tips:

* Start by extracting the business rules, namely the code comparing pokemon weights and returning the fattest as the winner. You can create a dedicated file called `src/domain.js` with a function `getFattest` which takes two pokemons and return... the fattest! Now use this function in `src/server.js`.

* Extract the code responsible of querying `pokeapi.co` in `src/repository.js` with a function called `findPokemon` that takes an ID and return a pokemon object. Use this function in `src/server.js`.

* Extract the two previous parts in `src/use-case.js` (without the routing part) in a function named `makePrediction` that takes two IDs, retrieve the pokemons associated using the `repository` and use the `domain` to make a prediction. It returns the most likely winner. Use this function in `src/server.js`.


## License

See `License.txt`.

[1]: https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html

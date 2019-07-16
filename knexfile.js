// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/car-dealer.db3"
    },
    useNullAsDefault: true,

    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};

// npx knex init
// npx knex migrate:make create-fruits-table
// npx knex migrate:up

// npx knex migrate:down to undo one migration at a time

// Update with your database settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_NAME || 'postgres',
      user: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'password',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },

  // test: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './src/database/test.sqlite',
  //   },
  //   migrations: {
  //     directory: './src/database/migrations',
  //   },
  //   useNullAsDefault: true,
  // },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

// {
//   "rg": 135135539,
//   "cpf": "545.169.060-07"
// }

exports.up = function up(knex) {
  return knex.schema.createTable('patients', (table) => {
    table.string('id').primary();
    table.string('name').notNullable();

    table.integer('age').notNullable();
    table.string('city').notNullable();
    table.string('bloodType').notNullable();
    table.integer('weight').notNullable();
    table.decimal('height').notNullable();
    table.string('problem').notNullable();
    table.string('historic').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function down(knex) {
  return knex.schema.dropTable('patients');
};

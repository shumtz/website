exports.up = function up(knex) {
  return knex.schema.createTable('doctors', (table) => {
    table.string('id').primary();

    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('uf').notNullable();
    table.string('municipality').notNullable();
    table.string('crm').notNullable();
    table.string('subscriptionType').notNullable();
    table.string('speciality').notNullable();
    table.string('situation').notNullable();
    table.string('actuationArea');

    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });
};

exports.down = function down(knex) {
  return knex.schema.dropTable('doctors');
};

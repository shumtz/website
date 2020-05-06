exports.up = function up(knex) {
  return knex.schema.createTable('doctors', (table) => {
    table.increments();

    table.string('name').notNullable();
    table.string('uf').notNullable();
    table.string('municipality').notNullable();
    table.string('crm').notNullable();
    table.string('subscriptionType').notNullable();
    table.string('speciality').notNullable();
    table.string('situation').notNullable();
    table.string('actuationArea');
    table.timestamps();
  });
};

exports.down = function down(knex) {
  return knex.schema.dropTable('doctors');
};

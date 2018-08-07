
exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', table => {
    table.increments('id')
    table.string('username')
    table.string('firstname')
    table.string('lastname')
    table.string('image')
    table.string('email')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropIfTableExists('customers')
};

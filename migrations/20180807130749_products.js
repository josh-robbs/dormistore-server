
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', table => {
    table.increments('id')
    table.string('name')
    table.text('description')
    table.string('image')
    table.float('price')
    table.integer('quantity')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropIfTableExists('products')
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', table => {
    table.integer('customer_id')
    table.integer('product_id')
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))  
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('orders')
};

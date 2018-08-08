
exports.seed = function(knex, Promise) {
  return knex('orders').del()
    .then(function () {
      return knex('orders').insert([
        { customer_id: '1',
          product_id: '5',
        },{
          customer_id: '2',
          product_id: '2'
        }
      ]);
    });
};

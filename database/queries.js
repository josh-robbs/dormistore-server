const database = require('./database-connection')

module.exports = {
  list(){
    return database('products').select()
  },
  read(id){
    return database('products').select().where('id', id)
  },
  post(product){
    return database('products')
      .insert(product)
      .returning('*')
      .then(record => record[0])
  },
  delete(id){
    return database('products')
      .delete()
      .where('id', id)
  },
  update(id, product){
    return database('products')
      .update(product)
      .where('id', id)
      .returning('*')
      .then(record => record[0])
  }
}
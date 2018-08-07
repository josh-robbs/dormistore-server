const database = require('./database-connection')

module.exports = {
  listAll(){
    return database('products').select()
  },
  readOne(id){
    return database('products').select().where('id', id)
  },
  postOne(product){
    return database('products')
      .insert(product)
      .returning('*')
      .then(record => record[0])
  },
  deleteOne(id){
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
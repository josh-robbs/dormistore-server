const database = require('./database-connection')

module.exports = {
  list(tableName){
    return database(tableName).select()
  },
  read(id,tableName){
    return database(tableName).select().where('id', id)
  },
  post(product,tableName){
    return database(tableName)
      .insert(product)
      .returning('*')
      .then(record => record[0])
  },
  delete(id,tableName){
    return database(tableName)
      .delete()
      .where('id', id)
  },
  update(id,product,tableName){
    return database(tableName)
      .update(product)
      .where('id', id)
      .returning('*')
      .then(record => record[0])
  }
}
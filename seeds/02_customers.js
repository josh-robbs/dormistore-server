
exports.seed = function(knex, Promise) {
  return knex('customers').del()
    .then(function () {
      return knex('customers').insert([
        {
          username: 'Daddy',
          firstname: 'Doug',
          lastname: 'Reaper',
          image: 'https://vignette.wikia.nocookie.net/nickelodeon/images/5/53/Doug_Funnie.png/revision/latest?cb=20160803191700',
          email: 'bigdoug@blahblah.blah'
        },{
          username: 'piglet',
          firstname: 'Priscilla',
          lastname: 'Prosciutto',
          image: 'http://www.tehcute.com/pics/201109/piglet-in-the-grass-big.jpg',
          email: 'littlepiggy@oink.com'
        },{
          username: 'Satin',
          firstname: 'Satin',
          lastname: 'Lord of the Fabrics',
          image: 'https://i.ytimg.com/vi/Gch3gFJ5d3U/maxresdefault.jpg',
          email: 'satin666@fabricmill.org'
        }
      ]);
    });
};

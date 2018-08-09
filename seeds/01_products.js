
exports.seed = function(knex, Promise) {
  return knex('products').del()
    .then(function () {
      return knex('products').insert([
        {
          name: "Beats Headphones",
          description:  "Premium Headphones With Quality And Style",
          image:  "https://www.beatsbydre.com/content/dam/beats/web/pcp/headphones/pro/_0002_overear-pro-black-rgb-thrqrtleft.png.large.1x.png",
          price: 150,
          quantity: 12
        },{
          name: "Macbook Pro",
          description:  "The ultimate pro notebook, MacBook Pro features faster processors, upgraded memory, the Apple T2 chip, and a Retina display with True Tone technology",
          image:  "https://cdn.shopify.com/s/files/1/0259/1735/products/macbook_pro_retina_template_4196bbbd-9c74-4fcf-b28f-bad2eaac92cd_2048x.png?v=1532332450",
          price: 800,
          quantity: 3
        },{
          name: "Razer Blade",
          description:  "The World's Smallest 15.6in Gaming Laptop. 8th Gen Intel Processor",
          image:  "https://assets.pcmag.com/media/images/364211-razer-blade-2014.jpg?width=1000&height=736",
          price: 800,
          quantity: 1
        },{
          name: "Xbox One",
          description:  "Xbox has the world's most powerful console and the best value in games and entertainment with the Xbox One family of consoles",
          image:  "https://images-na.ssl-images-amazon.com/images/I/61tl4Go6rqL._SL1100_.jpg",
          price: 220,
          quantity: 2
        },{
          name: "Samsung TV",
          description:  "See What You've Been Missing With a Picture That's 4x The Resolution as Full HD",
          image:  "https://www.iotgadgets.com/wp-content/uploads/2018/02/samsung-tv.jpg",
          price: 400,
          quantity: 1
        },{
          name: "Boosted Board",
          description:  "Free your commute. Get around on the most powerful electric skateboard. For beginners to pros. Regenerative braking. Financing available. Go 24 miles per hour. Power up hills 25% grade. 30-day guarantee.",
          image:  "https://cdn.shopify.com/s/files/1/1373/7335/products/boosted_1024x1024.png?v=1527176219",
          price: 200,
          quantity: 2
        },{
          name: "Mini Fridge",
          description:  "It's a fridge, thats mini...",
          image:  "https://target.scene7.com/is/image/Target/17304430?wid=488&hei=488&fmt=pjpeg",
          price: 100,
          quantity: 4
        },{
          name: "Microwave",
          description:  "It warms things up with science!",
          image:  "https://i5.walmartimages.com/asr/634cf459-ab85-44ec-98a3-bad23bf322d3_1.0bfec25976d5516321d7cb0039827fb7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
          price: 80,
          quantity: 6
        },{
          name: "Dyson Fan",
          description:  "It is great at keeping you cool, and costing to much!",
          image:  "https://images-na.ssl-images-amazon.com/images/I/617-1I3MvQL._SX425_.jpg",
          price: 100000000,
          quantity: 2
        },{
          name: "LED Lights",
          description:  "Add some flare to your living space!",
          image:  "https://images-na.ssl-images-amazon.com/images/I/71YukOZlUsL._SL1100_.jpg",
          price: 20,
          quantity: 3
        }
      ]);
    });
};

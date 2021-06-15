var express = require('express')
var router = express.Router();


let products = [
  {id:1, name:'Nike Air Max 270 Ess', price:149.99, imgName:'zapatillas/zapatilla1.png',  descriptionLong:'Las primeras Air Max para el día a día te ofrecen más estilo, comodidad y una gran actitud en las Nike Air Max 270. El diseño se inspira en los iconos Air Max para destacar la innovación más importante de Nike con una amplia ventana Air y una gran variedad de colores innovadores.',
      section:'Hombre', colors:[2, 4], size:[39, 42, 44], comments:[{stars: 4, review:'Cumple', pending:false, user:'David Herce'}, 
          {stars: 1.5, review:'Muy malo', pending:true, user:'André Giovanni'},
          {stars: 4.5, review:'Justo lo que necesitaba', pending:false, user:'Juan Grima'}]},

  {id:2, name:'LeBron 18', price:189.99, imgName:'zapatillas/zapatilla1.png',  descriptionLong:'Cuando LeBron acelera en la cancha, utiliza una fuerza tremenda. Las LeBron 18 se han diseñado para que saque el máximo partido a sus habilidades y reduzca el estrés al que somete su cuerpo. La amortiguación combinada en la planta del pie permite usar la fuerza para impulsarse a toda velocidad.',
      section:'Mujer', colors:[1, 5, 8, 7], size:[38, 39], comments:[{stars: 5, review:'Las mejores', pending:false, user:'Lucia Martínez'}, 
          {stars: 4.5, review:'Buenas pero caras', pending:true, user:'Helena Nuñez'}]},
        
  {id:3, name:"Nike Air Force 1'07 Essential", price:99.99, imgName:'zapatillas/zapatilla1.png',  descriptionLong:"Las Nike Air Force 1 '07 Essential llegan con la misma energía de siempre. Este modelo original de baloncesto da un nuevo toque al diseño que te encanta: piel impecable, colores atrevidos y la cantidad perfecta de brillo para hacerte destacar.",
      section:'Mujer', colors:[4, 3, 5], size:[37, 38, 39], comments:[{stars: 4.5, review:'A mi novia le han encantado', pending:false, user:'Pedro Roa'}, 
          {stars: 2, review:'Han llegado tarde y en mal estado', pending:true, user:'Silvia Herreros'}]},

  {id:4, name:'Nike Air Zoom Pegasus 38', price:84.99, imgName:'zapatillas/zapatilla1.png',  descriptionLong:'Las Nike Air Zoom Pegasus 38 siguen amortiguando cada pisada y salto con la misma espuma reactiva que empleaban sus predecesoras. La parte superior de malla transpirable combina la comodidad y la durabilidad necesarias con un ajuste más amplio en la puntera.',
      section:'Niño/a', colors:[2, 8], size:[35, 36], comments:[{stars: 1, review:'Caras y malas', pending:false, user:'André Giovanni'}, 
          {stars: 2.5, review:'Meh', pending:true, user:'Juan Grima'}]},

  {id:5, name:'Nike Air Max Plus', price:169.99, imgName:'zapatillas/zapatilla1.png',  descriptionLong:'Deja que tu estilo se eleve con las Nike Air Max Plus, una experiencia Air actualizada que ofrece una estabilidad y amortiguación increíbles. El destacado puente de TPU está inspirado en la cola de una ballena para añadir estructura, y los icónicos dedos de plástico rinden homenaje a las palmeras y las olas del océano. Estas zapatillas cuentan con una malla aireada, un acabado impecable y degradado y las familiares líneas de diseño ondulado del original para lucir el increíble diseño Air playero en la ciudad.',
  section:'Hombre', colors:[7, 4, 6], size:[40, 42, 43], comments:[{stars: 1, review:'Malo', pending:false, user:'David Herce'}, 
      {stars: 3, review:'Meh', pending:true, user:'André Giovanni'},
      {stars: 4.5, review:'Justo lo que necesitaba', pending:false, user:'Juan Grima'}]},

  {id:6, name:'Nike Air Force 1 Crater Flyknit', price:99.99, imgName:'zapatillas/zapatilla1.png',  descriptionLong:'Las Nike Air Force 1 Crater Flyknit actualizan el estilo clásico de baloncesto con, al menos, un 20 % de contenido reciclado. El material Flyknit supertranspirable ofrece ventilación y elasticidad alrededor del pie. La suela moteada mejora el legendario y cómodo estilo cómodo para disfrutar en cada pisada.',
      section:'Niño/a', colors:[1, 5, 7], size:[34, 37, 38], comments:[{stars: 5, review:'Las mejores', pending:false, user:'Lucia Martínez'}, 
          {stars: 4.5, review:'Buenas pero caras', pending:true, user:'Helena Nuñez'}]},
        
  {id:7, name:"Nike Air Force 1 Crater FlyKnit", price:109.99, imgName:'zapatillas/zapatilla1.png',  descriptionLong:"Las Nike Air Force 1 Crater FlyKnit, una versión innovadora del icono de baloncesto, combina el estilo clásico de baloncesto con, al menos, un 20 % de materiales reciclados.La parte superior FlyKnit superventilada cuenta con una textura similar a la del lino, y la mediasuela moteada Crater Foam añade un toque innovador. Su estilo legendario es el punto de partida y aporta reactividad adicional en cada pisada.",
      section:'Hombre', colors:[4, 5], size:[39, 41, 42, 44], comments:[{stars: 4.5, review:'A mi novia le han encantado', pending:false, user:'Pedro Roa'}, 
          {stars: 2, review:'Han llegado tarde y en mal estado', pending:true, user:'Silvia Herreros'}]},

  {id:8, name:'LeBron 18 Low "Summer Refresh"', price:159.99 , imgName:'zapatillas/zapatilla1.png',  descriptionLong:'Un jugador con la potencia y agilidad de LeBron necesita unas zapatillas ligeras y resistentes que aproveche su fuerza y le permitan moverse con precisión.La combinación de colores de las LeBron 18 Low "Summer Refresh" destaca en la cancha con tonos de lima y mango brillantes.Este modelo es más ligero y bajo que sus zapatillas de partido, y la unidad Max Air combinada con espuma Nike React ofrece amortiguación contra impactos y reactividad.La zona del tobillo acolchada y moldeada y el clip en el talón aerodinámico sujetan el pie en el partido.',
      section:'Mujer', colors:[2, 8], size:[38, 39, 40], comments:[{stars: 1, review:'Caras y malas', pending:false, user:'André Giovanni'}, 
          {stars: 2.5, review:'Meh', pending:true, user:'Juan Grima'}]},

  {id:9, name:'Nike Legend Essential 2', price:59.99, imgName:'zapatillas/zapatilla1.png',  descriptionLong:'Las Nike Legend Essential 2 cuentan con un talón plano y estable, flexibilidad bajo los dedos y sujeción lateral. Gracias a su agarre, podrás levantar peso, hacer una sesión de HIIT, darlo todo en una clase o fortalecerte en las máquinas.',
  section:'Niño/a', colors:[1, 5, 7], size:[34, 35, 36], comments:[{stars: 5, review:'Las mejores', pending:false, user:'Lucia Martínez'}, 
      {stars: 4.5, review:'Buenas pero caras', pending:true, user:'Helena Nuñez'}]},
    
  {id:10, name:"Nike Air Force 1 Shadow", price:109.99, imgName:'zapatillas/zapatilla1.png',  descriptionLong:"Las Nike Air Force 1 Shadow aportan un toque divertido y desenfadado a un diseño de baloncesto clásico. Con su diseño a capas, el logotipo duplicado y una mediasuela extragrande, destacan el estilo de las AF1 y duplican la diversión.",
      section:'Mujer', colors:[4, 5], size:[38, 39, 40], comments:[{stars: 4.5, review:'A mi novia le han encantado', pending:false, user:'Pedro Roa'}, 
          {stars: 2, review:'Han llegado tarde y en mal estado', pending:true, user:'Silvia Herreros'}]},

  {id:11, name:"Nike Air Force 1'07", price:99.99 , imgName:'zapatillas/zapatilla1.png',  descriptionLong:"El fulgor sigue vivo con las Nike Air Force 1 '07, un icono del baloncesto que aporta un nuevo toque a su ya característica piel impecable, sus colores llamativos y la cantidad perfecta de reflectante.",
      section:'Hombre', colors:[2, 8], size:[39, 41, 42, 44], comments:[{stars: 1, review:'Caras y malas', pending:false, user:'André Giovanni'}, 
          {stars: 2.5, review:'Meh', pending:true, user:'Juan Grima'}]},


  
];

router.get('/', (req, res) => {
  var query = (req.query['q'] || '').toLowerCase();
  if (query) {
    const foundProducts = products.filter(
      (product) => product.name.toLowerCase().indexOf(query) != -1);
    return res.status(200).json(foundProducts);
  }
  return res.status(200).json(products);
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  const foundProduct = products.find(u => u.id === +id);
  if (foundProduct) {
    return res.status(200).json(foundProduct);
  }
  return res.status(404);
});

router.post('/', (req, res) => {
  let product = req.body;
  product.id = products.length+1;
  let foundProduct = products.find(each => each.id === product.id);
  if (foundProduct) {
    return res.status(400)
        .json({msg: 'Product with id ' + product.id + ' already exists'});
  }
  products.push(product);
  return res.status(200).json({msg: 'Product with id ' + product.id + ' successfully created'});
});

router.patch('/:id', (req, res) => {
  let productId = req.params.id;
  let foundProduct = products.find(fp => fp.id === +productId);
  if (foundProduct) {

    foundProduct.id = req.body.id;
    foundProduct.imgBase64 = req.body.imgBase64;
    foundProduct.name = req.body.name;
    foundProduct.price = req.body.price;
    foundProduct.colors = req.body.colors;
    foundProduct.size = req.body.size;
    foundProduct.descriptionLong = req.body.descriptionLong;
    foundProduct.comments = req.body.comments;


    let msg = 'Product with id ' + productId + ' is now edited';
    return res.status(200).json({msg: msg});
  }
  return res.status(400).json({msg: 'Product with id ' + productId + ' not found!'});
});


router.delete('/:id', (req, res) => {
  let id = req.params.id;
  products = products.filter(p => p.id != id);
  return res.status(200).json({msg: 'Product with id ' + id + ' successfully deleted'});
})

module.exports = router;
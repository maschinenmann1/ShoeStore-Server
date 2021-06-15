var express = require('express')
var router = express.Router();


let products = [];
router.get('/', (req, res) => {
  const foundProducts = products;
  return res.status(200).json(foundProducts);
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
  let cartItem = req.body;
  cartItem.id = products.length+1;
  let foundProduct = products.find(each => each.id === cartItem.id);
  if (foundProduct) {
    return res.status(400)
        .json({msg: 'Product with id ' + cartItem.id + ' already exists'});
  }
  products.push(cartItem);
  return res.status(200).json({msg: 'Product with id ' + cartItem.id + ' successfully created'});
});


router.patch('/:id', (req, res) => {
  let productId = req.params.id;
  let foundProduct = products.find(fp => fp.id === +productId);
  
  if (foundProduct) {

    foundProduct.qty += req.body.qty;

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

router.delete('/', (req,res) => {
  products = [];
  return res.status(200).json({msg: 'Products deleted'});
})

module.exports = router;
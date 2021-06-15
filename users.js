var express = require('express')
var router = express.Router();



const users = [
  {name: 'Juan', lastname: 'Grima', email: 'juangrima@gmail.com', phone: '63434344', password: '123', 
  address: {country: 'france', province: '', city: 'Paris', zipCode:'4343434', direction:'Rue du Chat Qui Pêche'}, 
  admin: true},
];

router.get('/', (req, res) => {
  var query = (req.query['q'] || '').toLowerCase();
  if (query) {
    const foundUsers = users.filter(
      (user) => user.name.toLowerCase().indexOf(query) != -1);
    return res.status(200).json(foundUsers);
  }
  return res.status(200).json(users);
});

router.get('/:email', (req, res) => {
  console.log(re)
  const email = req.params.email;
  const foundUser = users.find(u => u.email === email);
  if (foundUser) {
    return res.status(200).json(foundUser);
  }
  return res.status(404);
});

router.post('/', (req, res) => {
  let user = req.body;
  let foundUser = users.find(each => each.email === user.email);
  if (foundUser) {
    return res.status(400)
        .json({msg: 'User with email ' + user.email + ' already exists'});
  }
  users.push(user);
  return res.status(200).json({msg: 'User with email ' + user.email + ' successfully created'});
});

router.patch('/:email', (req, res) => {
  let userEmail = req.params.email;
  let foundUser = users.find(fu => fu.email === userEmail);
  if (foundUser) {

    foundUser.name = req.body.name;
    foundUser.lastname = req.body.lastname;
    foundUser.email = req.body.email;
    foundUser.phone = req.body.phone;
    foundUser.admin = req.body.admin;

    foundUser.address.city = req.body.address.city;
    foundUser.address.country = req.body.address.country;
    foundUser.address.direction = req.body.address.direction;
    foundUser.address.province = req.body.address.province;
    foundUser.address.zipCode = req.body.address.zipCode;

    let msg = 'User with email ' + userEmail + ' is now edited';
    return res.status(200).json({msg: msg});
  }
  return res.status(400).json({msg: 'User with email ' + userEmail + ' not found!'});
});

router.delete('/:email', (req, res) => {
  const email = req.params.email;
  users = users.filter(u => u.email != email);
  return res.status(200).json({msg: 'User with email ' + email + ' successfully deleted'});
})

module.exports = router;
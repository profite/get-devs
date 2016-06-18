var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var CATEGORIES_FILE = path.join(__dirname, 'categories.json');
var BANNERS_FILE = path.join(__dirname, 'banners.json');
var SECTIONS_FILE = path.join(__dirname, 'sections.json');
var PRODUCTS_FILE = path.join(__dirname, 'products.json');
var CART_FILE = path.join(__dirname, 'cart.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/nav', function(req, res) {
  fs.readFile(CATEGORIES_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.get('/api/banners', function(req, res) {
  fs.readFile(BANNERS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.get('/api/sections', function(req, res) {
  fs.readFile(SECTIONS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.get('/api/products', function(req, res) {
  fs.readFile(PRODUCTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.get('/api/cart', function(req, res) {
  fs.readFile(CART_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.post('/api/cart', function(req, res) {
  fs.readFile(CART_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var products = JSON.parse(data);
    var newProductInCart = {
      id: Date.now(),
      productId: req.body.id,
      name: req.body.name,
      price: parseInt(req.body.price)
    };
    products.push(newProductInCart);
    fs.writeFile(CART_FILE, JSON.stringify(products, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.setHeader('Cache-Control', 'no-cache');
      res.json(products);
    });
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

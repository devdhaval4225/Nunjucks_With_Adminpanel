const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");
const app = express();
require("dotenv").config();

app.use(express.static(path.resolve(__dirname, 'src/assets')));

const port = process.env.PORT || 8000

// configure
nunjucks.configure('src/views', {
    autoescape: true,
    express: app
});



// ============================= ROUTES START ======================================================================================
app.get('/404', function (req, res) {
    res.render('404.njk');
});

app.get('/blank', function (req, res) {
    res.render('blank.njk');
});

app.get('/buttons', function (req, res) {
    res.render('buttons.njk');
});

app.get('/charts', function (req, res) {
    res.render('charts.njk');
});

app.get('/icons', function (req, res) {
    res.render('icons.njk');
});

app.get('/inbox', function (req, res) {
    res.render('inbox-details.njk');
});

app.get('/inbox', function (req, res) {
    res.render('inbox.njk');
});

app.get('/', function (req, res) {
    res.render('index.njk');
});

app.get('/login', function (req, res) {
    res.render('login.njk');
});

app.get('/maps', function (req, res) {
    res.render('maps.njk');
});

app.get('/portlet', function (req, res) {
    res.render('portlet.njk');
});

app.get('/price', function (req, res) {
    res.render('price.njk');
});

app.get('/product', function (req, res) {
    res.render('product.njk');
});

app.get('/signup', function (req, res) {
    res.render('signup.njk');
});

app.get('/typography', function (req, res) {
    res.render('typography.njk');
});



// ============================= END ======================================================================================


app.listen(port, () => {
    console.log("===============================");
    console.log(`Server running is ${port}`);
    console.log("===============================");
})
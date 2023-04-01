const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");
const app = express();
require("dotenv").config();

app.use(express.static(path.resolve(__dirname, 'src/assets')));
app.use(express.static(path.resolve(__dirname, 'src/views')));

const port = process.env.PORT || 8000

// configure
// nunjucks.configure('views', { autoescape: true });
// nunjucks.configure('src/views', {
//     autoescape: true,
//     express: app
// });



// ============================= ROUTES START ======================================================================================
app.get('/404', function (req, res) {
    res.render('404.html');
});

app.get('/blank', function (req, res) {
    res.render('blank.html');
});

app.get('/buttons', function (req, res) {
    res.render('buttons.html');
});

app.get('/charts', function (req, res) {
    res.render('charts.html');
});

app.get('/grids', function (req, res) {
    res.render('grids.html');
});

app.get('/icons', function (req, res) {
    res.render('icons.html');
});

app.get('/inbox-del', function (req, res) {
    res.render('inbox-details.html');
});

app.get('/inbox', function (req, res) {
    res.render('inbox.html');
});

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/login', function (req, res) {
    res.render('login.html');
});

app.get('/maps', function (req, res) {
    res.render('maps.html');
});

app.get('/portlet', function (req, res) {
    res.render('portlet.html');
});

app.get('/price', function (req, res) {
    res.render('price.html');
});

app.get('/product', function (req, res) {
    res.render('product.html');
});

app.get('/signup', function (req, res) {
    res.render('signup.html');
});

app.get('/typography', function (req, res) {
    res.render('typography.html');
});



// ============================= END ======================================================================================


app.listen(port, () => {
    console.log("===============================");
    console.log(`Server running is ${port}`);
    console.log("===============================");
})
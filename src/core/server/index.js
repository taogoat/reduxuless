var chalk = require('chalk')
var bodyParser = require('body-parser')
var express = require('express')

// Webpack Requirements
var webpack = require('webpack')
var config = require('./webpack.config')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')


var app = express()

var isProduction = process.env.NODE_ENV === 'production'
var port = isProduction ? process.env.PORT : 3000

if(!isProduction){
  console.log(chalk.green('Serving from /public on DEV ENV'))
  var compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
}

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(express.static('public'))

// Render Initial HTML
var renderFullPage = function(initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta content="IE=edge" http-equiv="X-UA-Compatible">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <title>Taogoat Cudnuggets</title>
      </head>
      <body>
        <div id="root"></div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="/public/bundle.js"></script>
      </body>
    </html>
  `;
};

app.get('/', function(req, res) {
    var initialState = { state: 'intialized!' }
    res.status(200).send(renderFullPage(initialState))
})

app.listen(port, function () {
  console.log('Server running on port ' + port)
});
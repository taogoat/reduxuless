var chalk = require('chalk')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var express = require('express')

// Webpack Requirements
var webpack = require('webpack')
var webpackConfig = require('./webpack.config')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

var config = require('./config')

var app = express()

var isProduction = process.env.NODE_ENV === 'production'
var port = isProduction ? process.env.PORT : 3000

if(!isProduction){
  console.log(chalk.green('Serving from /public on DEV ENV'))
  var compiler = webpack(webpackConfig)
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))

}

app.use(cookieParser())
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(express.static('public'))

app.post('/', function(request, response){
  response.cookie('state' , request.body)
  console.log('Inserting cookie ')
  console.log('   ---> '+ JSON.stringify(request.body))
  response.send({"result": "thanks"})
})  

// Render Initial HTML
var renderFullPage = function(name, initialState) {
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
        <title>${name}</title>
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
  var initialState = {}
  if(req.cookies.state) {
    initialState = config.merge(req.cookies.state)
  }
  else{initialState = config.collect()}
  res.status(200).send(renderFullPage(config.name, initialState))
})

app.listen(port, function () {
  console.log('Server running on port ' + port)
})

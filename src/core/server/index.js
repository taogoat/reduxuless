var chalk = require('chalk')
var express = require('express')

var app = express()

var isProduction = process.env.NODE_ENV === 'production'
var port = isProduction ? process.env.PORT : 3000

if(!isProduction){
  console.log(chalk.green('Serving from /public on DEV ENV'))
}


app.use(express.static('public'))

app.listen(port, function () {
  console.log('Server running on port ' + port)
});
var tgt = require('../../../../taogoat')
var Html = require('./theme.html.js')

var colors = tgt.getColors()

module.exports = {
  render: render,
  resolve: resolve
}

function render(target, state, dispatch) {
  tgt.id(target).html(Html())
  // tgt.id('banner').styl({textAlign:'center'})
  // tgt.id('increment').styl(my.count_btn)
  // tgt.id('decrement').styl(my.count_btn)
  // addListeners(dispatch)
  // setState(state['count'])
  // resolve(state)
}

function resolve(key) {
  var c = tgt.getColor(key)
  console.log('color is '+ JSON.stringify(c))

  document.body.style.backgroundColor = c.background
  document.body.style.color = c.innerText
  //document.getElementById('btn_settings').style.backgroundColor = color.background
  tgt.clas('tgt-main').styl({color: c.outerText, backgroundColor: c.background})
  tgt.clas('tgt-side').styl({color: c.outerText, backgroundColor: c.background})
  // tgt.id('foot_main').styl({color: c.outerText, backgroundColor: c.background})

  // tgt.id('leftside_cont').styl({color: c.outerText, backgroundColor: c.background})
  // tgt.id('rightside_cont').styl({color: c.outerText, backgroundColor: c.background})
  tgt.id('leftinside_cont').styl({backgroundColor: c.insideBar})
  tgt.id('content_cont').styl({color: c.innerText, backgroundColor: c.content})

}

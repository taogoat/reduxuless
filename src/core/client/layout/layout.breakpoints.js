'use strict;'

var tgt = require('../../../../taogoat')
var config = require('../../server/config')

// this module is called on window.resize
//    to check the media state
//    and draw the appropriate layout

module.exports = {
  check: function(width) {
    var b = config.breakpoints
    if (width>b.desktop){return 'desktop'}
    else if (width>b.tablet){return 'tablet'}
    else if (width>b.phablet){return 'phablet'}
    else if (width<=b.phablet){return 'phone'}
    else{return 'err'}
  },
  resetView: function(breakpoint) {
      switch (breakpoint) {
        case 'phone':
  tgt.id('cont_leftside').styl({display: 'none'})
  tgt.id('cont_leftinside').styl({display: 'none'})
  tgt.id('cont_rightside').styl({display: 'none'})
  tgt.id('cont_content').styl({left: '0%', width: '100%'})
          break
        case 'phablet':
  tgt.id('cont_leftside').styl({display: 'inline', width: '20%'})
  tgt.id('cont_leftinside').styl({display: 'none'})
  tgt.id('cont_rightside').styl({display: 'none'})
  tgt.id('cont_content').styl({left: '22.5%', width: '75%'})
          break
        case 'tablet':
  tgt.id('cont_leftside').styl({display: 'inline', width: '25%'})
  tgt.id('cont_leftinside').styl({display: 'none'})
  tgt.id('cont_rightside').styl({display: 'inline'})
  tgt.id('cont_content').styl({left: '27%', width: '59%'})
          break
        case 'desktop':
  tgt.id('cont_leftside').styl({display: 'inline', width: '25%'})
  tgt.id('cont_leftinside').styl({display: 'inline'})
  tgt.id('cont_rightside').styl({display: 'inline'})
  tgt.id('cont_content').styl({left: '35.5%', width: '51.5%'})
          break
      }
    }
}

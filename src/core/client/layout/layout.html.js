'use strict;'

module.exports = {
  mainHtml : `
    <div id="main_head" class="tgt-main">
	    Header
    </div>
    <div id="main_main" class="tgt-main">
	  A layout drawn with a utility function!
    </div>
    <div id="main_foot" class="tgt-main">
      Footer 
    </div>
  `,
  contentHtml : `
    <div id="cont_leftside" class="tgt-side">
      Leftside
    </div>
    <div id="cont_leftinside" class="tgt-inside">
      LeftInside
    </div>
    <div id="cont_content" class="tgt-content">
      Content
    </div>
    <div id="cont_rightside" class="tgt-side">
      Right side
    </div>
  `
}

'use strict;'

module.exports = {
  mainHtml : `
    <div id="head_main" class="tgt-main">
	    Header
    </div>
    <div id="main_main" class="tgt-main">
	  A layout drawn with a utility function!
    </div>
    <div id="foot_main" class="tgt-main">
      Footer 
    </div>
  `,
  contentHtml : `
    <div id="leftside_cont" class="tgt-side">
      Leftside
    </div>
    <div id="leftinside_cont" class="tgt-inside">
      LeftInside
    </div>
    <div id="content_cont" class="tgt-content">
      Content
    </div>
    <div id="rightside_cont" class="tgt-side">
      Right side
    </div>
  `
}

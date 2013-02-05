// ENABLE FIXED TOC SIDEBAR ON TUTORIALS PAGES
// borrowed from http://twitter.github.com/bootstrap/javascript.html
// ++++++++++++++++++++++++++++++++++++++++++

$(document).ready(function() {
  var $window = $(window)
  $('.bs-docs-sidenav').affix({
    offset: {
      top: function () { return $window.width() <= 980 ? 290 : 210 }
    , bottom: 270
    }
  })
})

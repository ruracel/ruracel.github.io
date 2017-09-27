var PHOTOS_IN_ROW = 3;

angular.module('app', [])
  .controller('MenuController', function() {
    this.items = data.menu;
  })
  .controller('GalleryController', function() {
    this.data = data.gallery;
  })
  .controller('BiographyController', function() {
    this.data = data.repertoire;
  });


var flexHeadRef = $('#flexHead');
var flexHeadHandler = function() {
  var topOffset = $(this).scrollTop();

  if (topOffset >= 500) {
    flexHeadRef.slideDown();
  } else {
    flexHeadRef.hide();
  }
}
$(window).scroll(flexHeadHandler);


$(document).ready(function() {
  flexHeadHandler();
}).on('click', '.x-scroll-to', function(e) {
  e.preventDefault();
  var targetOffset = $($(this).attr('href')).offset().top;
  $('html,body').animate({scrollTop: targetOffset - 150});
});
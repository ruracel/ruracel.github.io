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
  })
  .controller('EventController', function($scope) {
    this.events = data.events;

    var today = moment().startOf('day');
    
    $scope.eventTime = function(eventDate) {
      var dateAtMidnight = moment(eventDate).startOf('day');
      if (today.unix() < dateAtMidnight.unix()) {
        return 1;
      }

      return today.unix() > dateAtMidnight.unix() ? -1 : 0;
    }

    $scope.orderFunction = function(event) {
      return moment(event.date).unix() * -1;
    }

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
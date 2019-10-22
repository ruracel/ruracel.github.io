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
    var theEvents = data.events.slice(0).sort(function(lh, rh) {
      return (moment(lh.date).unix() - moment(rh.date).unix()) * -1;
    });

    this.events = [];
    this.events.push(theEvents.slice(0, 3));
    this.events.push(theEvents.slice(3, 6));

    this.oldEvents = theEvents.length > 6 ? theEvents.slice(6, 10) : [];

    var today = moment().startOf('day');
    $scope.eventTime = function(eventDate) {
      var dateAtMidnight = moment(eventDate).startOf('day');
      if (today.unix() < dateAtMidnight.unix()) {
        return 1;
      }

      return today.unix() > dateAtMidnight.unix() ? -1 : 0;
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
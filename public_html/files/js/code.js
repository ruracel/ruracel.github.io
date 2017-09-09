var data = {
  slogan: 'Goodness also comes through music, because it is conditioned by love.',
  menu: [{
    title: 'Home', anchor: 'head'
  },{
    title: 'Biography', anchor: 'biography'
  },{
    title: 'Recordings', anchor: 'recordings'
  },{
    title: 'Gallery', anchor: 'gallery'
  },{
    title: 'Contacts', anchor: 'contacts'
  }],
  gallery: [{
      url: 'https://lh3.googleusercontent.com/Z4nD9NDo22iXEQ5rM9CUU7LdBg6FyKTfyr0eQxg8FuArhIqm7MwjOFHFut0M7dNi8cEqkwnYhxyghxyLBNqsXJzsndphOk0LJIEUXIeAhtdEIfRT-5Ip_n-oq-XoZKa9paeUVP8jnSY=w514-h770-no'
    },{
      url: 'https://lh3.googleusercontent.com/CSysIAvqhCuxuBIvxWfXfle23ef4jVO6N6kIu9AwdreLfYJd3c2v3ckHFuiCcJL7t5zC7XBeSo64CXu8Zpfjqb7sNjfUM_-H_KTblfYXR8EGxyIzlasC6cEHSPwXJTLVOsPdJO9l3mU=w514-h770-no'
    },{
      url: 'https://lh3.googleusercontent.com/9aFuOLIgVTTUDX9_q3bzb1oIC-AkYI0j1ALQAOOwQlPBi1E4DkE1OJqPmJMr31Zzl3z-13XbXCAebTRrMGMz1lWZVUKD5_DiJhIfIQ2urY89SRB4kuBsdzdWD8-JTeq7NSOXz566dIs=w514-h770-no'
    },{
      url: 'https://lh3.googleusercontent.com/NN4PiRO8L9KtlARWJfqzEfoqNBONeMUvXRYnBrvk9xIvBQ271jeNHBO4XAPeQgE5jysa598ZopTsum_LsXi7eSX54V3F4UWccDQUBptvFdO79_LckFsqa46wpuVsYO5MFtWjUDZfK4w=w514-h770-no'
    },{
      url: 'https://lh3.googleusercontent.com/FaW_SO5Qqbk62xKmjg25aJXmZTVohhIc26DB0w95WfMJjtbb-9MmvmSnwNHlCynNkzFhjkfFBv_kCKiGMZe3QUa-TdsU9XDe_vyF_oS32tYwZlilHUb6D2nAGKRxZV3hScRxOd2OxvA=w514-h770-no'
    },{
      url: 'https://lh3.googleusercontent.com/H8XlQZB6MXf4Rgh3yjaWvAOlJT8y4bn1T1vdEmlFjdqFJrCDAD56QoO0-KuZtPdxeYp0pyYBQzUyD2Y7jSHBlr4EXOcys8bmMJYQhbtp01sJXEufjCS7MY9pYFXsvlm8SW-IVDi_pXM=w514-h770-no'
    }]
};

var PHOTOS_IN_ROW = 3;

angular.module('app', [])
  .controller('HeaderController', function() {
    this.slogan = data.slogan;
  })
  .controller('MenuController', function() {
    this.items = data.menu;
  })
  .controller('GalleryController', function() {
    var items = [];

    for (var i = 0; i < data.gallery.length; i++) {
      if (i % PHOTOS_IN_ROW == 0) {
        items.push([]);
      }

      items[items.length - 1].push(data.gallery[i]);
    }

    this.data = items;

    console.log(this.items);
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
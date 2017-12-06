TweenMax.from("body", 2, {y:-500, ease:Bounce.easeOut});

TweenMax.from(".jumbotron h1", 2, {y:-600, rotation:30, ease: Elastic.easeOut.config(1, 0.3), delay:1.5});

TweenMax.from(".jumbotron h2", 2, {y:-600, rotation:30, ease: Elastic.easeOut.config(1, 0.3), delay:1.7});

TweenMax.from(".jumbotron .fa", 1.5, {x:-1000, rotation:30, ease: Bounce.easeOut, delay:2});


var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

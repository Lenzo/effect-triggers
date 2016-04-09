var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapse = $('.btn-collapse-expand');
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');

var $btnAppend = $('.btn-append');
var $list = $('.list');

$btnShowHide.on('click', $box, function () {
  $box.toggleClass('show');
});

$btnMove.on('click', $diamond, function () {
  $diamond.toggleClass('diamond-in');
});

$btnCollapse.on('click', $panel, function () {
  $panel.toggleClass('collapse');
});

$btnBounce.on('click', $circle, function () {
  $circle.addClass('bounce');
});

$circle.on('animationend', function () {
  $circle.removeClass('bounce');
});

$btnAppend.on('click', $btnAppend, function (list) {
  var $li = $('<li>');

  $list.append($li);
  $li.html('New List Item');
  $li.addClass('expand');
});

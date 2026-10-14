console.log("complete");
console.log($(window).width());
console.log($(window).height());

let wWidth = $(window).width();
let wHeight = $(window).height();

//console.log(wWidth);
//console.log(wHeight);

//$(document).mousemove(function (event) {
//  $("#status").html(event.pageX + ", " + event.pageY);
//  $(".box").css("width", event.pageX);
//  $(".box").css("height", event.pageY);
//});

$(document).mousemove(function (event) {
  let mouseX = event.pageX;
  let mouseY = event.pageY;
  console.log(mouseX);
  console.log(mouseY);
  $(".bg-img").css("object-position", `${mouseX / 10}% ${mouseY / 10}%`);
  let imgWidth = $(".cat-img").width();
  let imgHeight = $(".cat-img").height();

  $(".cat-img").css("left", mouseX - imgWidth / 2 + "px");
  $(".cat-img").css("top", mouseY - imgHeight / 2 + "px");
});

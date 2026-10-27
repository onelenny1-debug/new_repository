console.log("complete");

$(document).ready(function () {
  let $container = $(".container");
  $container.one("click", function () {
    /* 온클릭 대신 원클릭 하면 한번만 기능 나오고 안나옴*/
    $container.toggleClass("split");
  });
  let $frame = $(".frame"); //큰사진 애니메이션
  $frame.one("click", function (e) {
    $container.addClass("fadein");
  });
  let $pen = $(".pen"); //펜애니메이션
  $pen.one("click", function (e) {
    e.stopPropagation(); /*이걸로 뒤에 나올 애니메이션까지 클릭 한번으로 뒤에거 까지 나오는거 방지*/
    $container.addClass("move");
  });
});
let $container = $(".container");
let $small1 = $(".small1");
let $small2 = $(".small2");
let $text1 = $(".text1");
let $text2 = $(".text2");

let toggleState = false; // 토글 첨에 꺼져있는 상태

//작은사진 1
/*if else를 사용해 hover 랑 leave 할떄 마다 다른 사진과 텍스트 나옴*/
$small1.on("mouseenter", function () {
  if (!$container.hasClass("fadein")) return;

  if (toggleState) {
    $small1.addClass("active");
    $text1.addClass("active");
    $small2.removeClass("active");
    $text2.removeClass("active");
  } else {
    $small1.removeClass("active");
    $text1.removeClass("active");
    $small2.addClass("active");
    $text2.addClass("active");
  }

  toggleState = !toggleState;
});
//작은사진 2
$small2.on("mouseenter", function () {
  if (!$container.hasClass("fadein")) return;

  if (toggleState) {
    $small1.addClass("active");
    $text1.addClass("active");
    $small2.removeClass("active");
    $text2.removeClass("active");
  } else {
    $small1.removeClass("active");
    $text1.removeClass("active");
    $small2.addClass("active");
    $text2.addClass("active");
  }

  toggleState = !toggleState;
});

$small1.on("mouseleave", function () {
  $small1.removeClass("active");
  $text1.removeClass("active");
  $small2.removeClass("active");
  $text2.removeClass("active");
});

$small2.on("mouseleave", function () {
  $small1.removeClass("active");
  $text1.removeClass("active");
  $small2.removeClass("active");
  $text2.removeClass("active");
});
/*제작기간 10/14~10/17 2:59am */

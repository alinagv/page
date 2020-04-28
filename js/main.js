var btn = document.getElementById("btn");

btn.onclick = function (e) {
  e.preventDefault();
  var text = document.querySelector("p.intro");
  text.classList.add("black");
  var img = document.querySelector(".desktop");
  img.style.display = "none";
  document.querySelector(".block-value").style.marginLeft = "20px";
};

$(function () {
  $(window).scroll(function () {
    $("#learn .section-title").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("fadeInDown");
      }
    });
  });
  $(window).scroll(function () {
    $(".block-travel").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("fadeInUp");
      }
    });
  });
  $(window).scroll(function () {
    $(".block-value").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("fadeInRight");
      }
    });
  });
  $(window).scroll(function () {
    $(".form").each(function () {
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + 650) {
        $(this).addClass("fadeIn");
      }
    });
  });
});

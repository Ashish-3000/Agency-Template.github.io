// changing background in top
var header = $(".image_hero");
console.log(header);
var current = 0;
function nextBackground() {
  current++;
  current = current % header.length;
  for (let i = 0; i < header.length; i++) {
    const element = header[i];
    if (i != current) {
      $("#image_hero" + i).css("display", "none");
      console.log(90);
    } else {
      $("#image_hero" + i).css("display", "block");
    }
  }
}
setInterval(nextBackground, 8000);
// changing quotes
setInterval(nextQuote, 2000);
var quote = $(".quote");
console.log(quote);
var bound = 0;
function nextQuote() {
  bound++;
  bound = bound % quote.length;
  for (let i = 0; i < quote.length; i++) {
    const element = quote[i];
    if (i != bound) {
      $("#quote" + i).css("display", "none");
      console.log(90);
    } else {
      $("#quote" + i).css("display", "block");
    }
  }
}
// for navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
(function ($, win) {
  $.fn.inViewport = function (cb) {
    return this.each(function (i, el) {
      function visPx() {
        var H = $(this).height(),
          r = el.getBoundingClientRect(),
          t = r.top,
          b = r.bottom;
        return cb.call(el, Math.max(0, t > 0 ? H - t : b < H ? b : H));
      }
      visPx();

      $(win).on("resize scroll", visPx);
    });
  };
})(jQuery, window);
$(".animation1").inViewport(function (px) {
  if (px) {
    $(this).addClass("animate1");
    $(this).css("opacity", "1");
  }
});
$(".animation2").inViewport(function (px) {
  if (px) {
    $(this).addClass("animate2");
    $(this).css("opacity", "1");
  }
});

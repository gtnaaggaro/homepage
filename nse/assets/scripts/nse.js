/** Animating numbers **/
$(
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
        $(".animate-element");
      };
    })(jQuery, window)
  );

  /* price */
  $(".price").inViewport(function (px) {
    if (px > 0 && !this.initNumAnim) {
      this.initNumAnim = true; 
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2000,
            step: function (now) {
              $(this).text(now.toFixed(2));
              $(this).text(Math.round(now * 100) / 100);
            },
          }
        );
    }
  });


// main script
(function () {
  "use strict";

  // Testimonial Slider
  // ----------------------------------------
  const testimonialSlider = document.querySelector(".testimonial-slider");
  if (testimonialSlider) {
    new Swiper(testimonialSlider, {
      spaceBetween: 24,
      loop: false,
      rewind: true,
      pagination: {
        el: ".testimonial-slider-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 4,
        },
      },
    });
  }

  // Timeline Slider
  // ----------------------------------------
  const timelineSlider = document.querySelector(".timeline-slider");
  if (timelineSlider) {
    const timelineSwiper = new Swiper(timelineSlider, {
      spaceBetween: 12,
      loop: true,
      slidesPerView: "auto",
      centeredSlides: false,
      speed: 12000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      freeMode: {
        enabled: true,
        momentum: false,
        sticky: false,
      },
      allowTouchMove: true,
      loopAdditionalSlides: 4,
    });

    function pauseTimelineAutoplay() {
      if (!timelineSwiper.autoplay) {
        return;
      }

      if (typeof timelineSwiper.autoplay.pause === "function") {
        timelineSwiper.autoplay.pause();
      } else if (typeof timelineSwiper.autoplay.stop === "function") {
        timelineSwiper.autoplay.stop();
      }
    }

    function resumeTimelineAutoplay() {
      if (!timelineSwiper.autoplay) {
        return;
      }

      if (typeof timelineSwiper.autoplay.resume === "function") {
        timelineSwiper.autoplay.resume();
      } else if (typeof timelineSwiper.autoplay.start === "function") {
        timelineSwiper.autoplay.start();
      }
    }

    timelineSlider.addEventListener("pointerenter", pauseTimelineAutoplay);
    timelineSlider.addEventListener("pointerleave", resumeTimelineAutoplay);

    timelineSlider.querySelectorAll(".timeline-slide").forEach(function (slide) {
      slide.addEventListener("pointerenter", pauseTimelineAutoplay);
      slide.addEventListener("pointerleave", resumeTimelineAutoplay);
    });
  }
})();

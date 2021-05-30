(function ($, document, window) {
    $(".lprf-slick").slick({
        dots: true,
        infinite: true,
        // autoplay:true,
        // autoplaySpeed:1500,
    });
    //AOS.init();
    $(".counter").countUp();

    $(".modal").each(function () {
        $(this).on("shown.bs.modal", function (e) {
            $(".lprf-slick").resize();
        });
    });
    $(".parallaxie").parallaxie();

    // $('.modal').on('shown.bs.modal', function (e) {
    //   $('.lprf-slick').resize();
    // })

    $(".slick-trigger").slick();

    $(".modal").on("shown.bs.modal", function (e) {
        $(".slick-trigger").slick("setPosition");
        $(".wrap-modal-slider").addClass("open");
    });

    AOS.init({
        offset: 500, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 700, // values from 0 to 3000, with step 50ms
    });

    // AK: auto-hide logo & menu button
    document.addEventListener("DOMContentLoaded", function () {
        var lastScrollTop = window.scrollY,
            elAutoHide = document.querySelectorAll(".autohide");

        if (elAutoHide.length) {
            window.addEventListener("scroll", function () {
                var scrollTop = window.scrollY;
                if (scrollTop < lastScrollTop || scrollTop > lastScrollTop + 20) {
                    // ignore small touches down less than 20px
                    for (var i = 0; i < elAutoHide.length; ++i) {
                        var el = elAutoHide[i];

                        var scrollTop = window.scrollY;
                        if (scrollTop < lastScrollTop) {
                            el.classList.remove("scrolled-down");
                            el.classList.add("scrolled-up");
                        } else {
                            el.classList.remove("scrolled-up");
                            el.classList.add("scrolled-down");
                        }
                    }
                    lastScrollTop = scrollTop;
                }
            });
        }
    });
})(jQuery, document, window);

// GSAP Animaion Start

// Circle Progress Bar Animation

gsap.registerPlugin(ScrollTrigger);

var circle = gsap.timeline({
    scrollTrigger: {
        trigger: ".land-preservation-grow",
        start: "top 20%",
        end: "70% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

circle.to("circle.complete", {
    duration: 2,
    strokeDashoffset: 87.9646,
});

// Yellow Box Animation

gsap.registerPlugin(ScrollTrigger);

var yellowBox = gsap.timeline({
    scrollTrigger: {
        trigger: ".regenerative-farming",
        start: "50% 50%",
        end: "top top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

yellowBox.from(".yellow-top-box1", {
    duration: 3,
    height: "0",
}),
    yellowBox.from(
        ".yellow-bottom-box1",
        {
            duration: 3,
            height: "0",
        },
        "-=2.8"
    ),
    yellowBox.from(
        ".full-yellow",
        {
            duration: 2,
            autoAlpha: 0,
        },
        "-=0.5"
    );

// Barrel Animation

gsap.registerPlugin(ScrollTrigger);

var barrel = gsap.timeline({
    scrollTrigger: {
        trigger: ".barrel-container",
        start: "top 90%",
        end: "top top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

barrel.from(".barrel", {
    duration: 2.2,
    autoAlpha: 0,
    scale: 0.55,
    stagger: 0.55,
});

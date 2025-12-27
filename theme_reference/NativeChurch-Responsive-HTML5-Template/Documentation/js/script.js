if(typeof Cufon == 'function') Cufon.replace('h1, h2, h3, h4, h5, h6');
 
jQuery(document).ready(function ($) {
    const $nav = $('#documenter_nav');
    const $navLinks = $nav.find('a[href^="#"]');
    const scrollOffset = 100;
    const scrollDuration = 600;
    const easing = 'swing';

    // Smooth scroll on nav click
    $navLinks.on('click', function (e) {
        e.preventDefault();
        const targetId = $(this).attr('href');
        const $target = $(targetId);

        if ($target.length) {
            $('html, body').stop().animate({
                scrollTop: $target.offset().top
            }, scrollDuration, easing, function () {
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    window.location.hash = targetId;
                }
                updateNav(); // ensure current class is added after scroll
            });
        }
    });

    // ScrollSpy: Highlight active nav link
    function updateNav() {
        const scrollTop = $(window).scrollTop();
        let currentId = null;

        $navLinks.each(function () {
            const targetId = $(this).attr('href');
            const $target = $(targetId);

            if ($target.length) {
                const sectionTop = $target.offset().top;

                if (scrollTop + scrollOffset >= sectionTop) {
                    currentId = targetId;
                }
            }
        });

        if (currentId) {
            $navLinks.removeClass('current');
            $navLinks.filter(`[href="${currentId}"]`).addClass('current');
        }
    }

    // Run on scroll and once at start
    $(window).on('scroll', updateNav);
    updateNav();

    // Scroll to hash on load
    if (window.location.hash) {
        const $target = $(window.location.hash);
        if ($target.length) {
            setTimeout(function () {
                $('html, body').scrollTop(0);
                $('html, body').animate({
                    scrollTop: $target.offset().top
                }, scrollDuration, easing, function () {
                    updateNav();
                });
            }, 100);
        }
    }
});

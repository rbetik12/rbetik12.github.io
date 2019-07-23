$(() => {
    adaptNavbar();
});

var navbarExpanded = false;

function adaptNavbar() {
    if ($(window).width() > 700) {
        //Resets attributes for navbar to prevent bugs
        $(".navbar-wrapper-mobile").removeAttr("style");
        $(".navbar-list-mobile").removeAttr("style");
        $("body *").removeAttr("style");
        //Sets styles for higer width screens
        $(".navbar-wrapper-mobile").addClass("navbar-wrapper").removeClass("navbar-wrapper-mobile");
        $(".navbar-content-mobile").addClass("navbar-content").removeClass("navbar-content-mobile");
        $(".navbar-list-mobile").addClass("navbar-list").removeClass("navbar-list-mobile");
        $(".expand-button").css("display", "none");

    } else {
        navbarExpanded = false;
        $(".navbar-wrapper").removeAttr("style");
        //Sets styles for mobile screens
        $(".navbar-wrapper").removeClass("navbar-wrapper").addClass("navbar-wrapper-mobile");
        $(".navbar-content").removeClass("navbar-content").addClass("navbar-content-mobile");
        $(".navbar-list").removeClass("navbar-list").addClass("navbar-list-mobile");
        $(".expand-button").css("display", "block");
        //Resets attributes for elements items to prevent bugs 
        for (let i = 0; i < $(".navbar-list-mobile li a").length; i++) {
            $(".navbar-list-mobile li a").removeAttr("style");
        }
        $("body *").removeAttr("style");

        $(".expand-button").click(() => {
            if ($(".navbar-wrapper-mobile").is(":animated") || $(".navbar-list-mobile").is(":animated")) return;
            if (!navbarExpanded) {
                $(".navbar-wrapper-mobile").animate({
                    height: "+=4em"
                }, "slow", () => {
                    $(".navbar-list-mobile").css("display", "block");
                    $(".navbar-list-mobile").animate({
                        opacity: 1
                    }, "slow", () => {
                        navbarExpanded = true;
                    });
                });
            } else {

                $(".navbar-list-mobile").animate({
                    opacity: 0
                }, "fast", () => {
                    $(".navbar-list-mobile").css("display", "none");
                    $(".navbar-wrapper-mobile").animate({
                        height: "-=4em"
                    }, "slow", () => {
                        navbarExpanded = false;

                    });
                });

            }
        });

    }
}

$(window).resize(() => {
    adaptNavbar();
})
var navbarCollapsed = false;

function navbarCollapseAnimation() {
    $(".navbar-wrapper").animate({
        paddingTop: "1.5em",
        paddingBottom: "1.5em"
    }, "fast", () => {
        navbarCollapsed = true;
    })
}

function navbarExpandAnimation() {
    $(".navbar-wrapper").animate({
        paddingTop: "3.5em",
        
    }, "fast", () => {
        navbarCollapsed = false;
    })
}

$(window).scroll(() => {
    if ($(window).scrollTop() > 30 && !navbarCollapsed){
        navbarCollapseAnimation();
    }
    else if ($(window).scrollTop() <= 30 && navbarCollapsed) {
        navbarExpandAnimation();
    }
});
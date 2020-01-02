function socialMediaLeftSlideAnimation() {
    $(".social-media-wrapper").animate({
        marginRight: "1em"
    }, "slow", function () {
        // console.log("Left slide completed");
    })
}

function socialMediaRightSlideAnimation() {
    $(".social-media-wrapper").animate({
        marginRight: "-11em"
    }, "slow", function () {
        // console.log("Right slide completed");
    })
}

function navbarCollapse() {
    $(".navbar-wrapper").animate({
        padding: "1.5em",
        fontSize: "-=0.2em",
        opacity: 1
    }, 300, function () {
        console.log("Navbar collapsed");
        $(".navbar-content").animate({
            marginLeft: "+=2em"
        }, 100, function () {
            // console.log("Content moved right");
        });
    })
    $(".navbar-wrapper").css("background-color", "white");
    $(".navbar-list li a").css("color", "black");
    $(".navbar-list li a:visited").css("color", "black");
}

function navbarExpand() {
    $(".navbar-content").animate({
        marginLeft: "-=2em"
    }, 100, function () {
        $(".navbar-wrapper").animate({
            padding: "3em",
            fontSize: "+=0.2em",
            opacity: 0.5
        }, 300, function () {
            // console.log("Navbar expanded");
        })
    });
    $(".navbar-wrapper").css("background-color", "transparent");
    $(".navbar-list li a").css("color", "white");
    $(".navbar-list li a:visited").css("color", "white");
}

var socialMediaVisible = false;
var navbarCollapsed = false;
var minPageOffset = 30;
var minWindowWidth = 700;

$(window).scroll(function () {
    let windowWidth = $(window).width();
    if (windowWidth > minWindowWidth && $(window).scrollTop() > minPageOffset) {
        if (!socialMediaVisible) {
            socialMediaVisible = true;
            socialMediaLeftSlideAnimation();
        }
        if (!navbarCollapsed) {
            navbarCollapsed = true;
            navbarCollapse();
        }
    } else if (windowWidth > minWindowWidth && $(window).scrollTop() <= minPageOffset) {
        if (socialMediaVisible) {
            socialMediaVisible = false;
            socialMediaRightSlideAnimation();
        }
        if (navbarCollapsed) {
            navbarCollapsed = false;
            navbarExpand();
        }
    }
});

$(() => {
    $(".main-page-text").animate({
        right: 0,
        opacity: 1 
    }, 1700, () => {
        $(window).resize(()=> {
            $(".main-page-text").css(
            {
                "right": "0px",
                "opacity": "1"
            }
        );
        });
    })

    $(".contact-me-button").animate({
        right: 0,
        opacity: 1 
    }, 1700, () => {$(window).resize(()=> {
        $(".contact-me-button").css(
        {
            "right": "0px",
            "opacity": "1"
        }
    );
    });})

    
})


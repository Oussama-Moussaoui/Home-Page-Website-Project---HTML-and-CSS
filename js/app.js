let map;

function initMap() {

    const loc = {
        lat: 40.741895,
        lng: -73.989308
    };

    map = new google.maps.Map(document.getElementById("map"), {
        center: loc,
        zoom: 8,
    });

    const marker = new google.maps.Marker({
        position: loc,
        map: map
    });
}

// Sticky Navbar Opacity
window.addEventListener('scroll', function () {
    const navbar = document.querySelector("#navbar");
    if (window.scrollY > 150) {
        navbar.style.opacity = 0.85;
    } else {
        navbar.style.opacity = 1;
    }
});


// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
                scrollTop: $(hash).offset().top - 60
            },
            800
        );
    }
});
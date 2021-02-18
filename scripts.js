const toggleButton = document.querySelector('.toggle-menu');
const navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', () => {
    navBar.classList.toggle('toggle');
});







//Design Project drop down
e.preventDefault();
$("#down_arrow").click(function () {
    $(this).toggleClass("up_class");

    $("#design_project").slideToggle(500);
    e.preventDefault();

})
$(".Services_sections h3").click(function () {
    $("#down_arrow").addClass("up_class");

    $("#design_project").slideToggle(500);
    e.preventDefault();

})

////end



//Set and interior drop down

$("#down_arrow_2").click(function () {
    $(this).toggleClass("up_class");

    $("#set_interior").slideToggle(500);
    e.preventDefault();

})
$(".set_interior h3").click(function () {
    $("#down_arrow_2").toggleClass("up_class");

    $("#set_interior").slideToggle(500);
    e.preventDefault();

})

////end



//decoration drop down

$("#down_arrow_3").click(function () {
    $(this).toggleClass("up_class");

    $("#decoration").slideToggle(500);
    e.preventDefault();

})
$(".decoration h3").click(function () {
    $("#down_arrow_3").toggleClass("up_class");

    $("#decoration").slideToggle(500);
    e.preventDefault();

})

////end








$(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
        $(".home_section_header").addClass('header_fixed_index')
        $(".other_page_div").addClass('header_fixed')
        $(".navbar li").addClass("nav_fiexed")
        $(".logo ").addClass('logo_fixed')
        $(".toggle-menu").addClass('toogle_fixed')

    }
})

$(window).scroll(function () {
    if ($(window).scrollTop() < 1) {
        $(".home_section_header").removeClass('header_fixed_index')
        $(".other_page_div").removeClass('header_fixed')
        $(".navbar li").removeClass("nav_fiexed")
        $(".logo ").removeClass('logo_fixed');
        $(".toggle-menu").removeClass('toogle_fixed')

    }
})









// Adds a marker to the map.




// Each marker is labeled with a single alphabetical character.
const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;

function initMap() {
    const bangalore = {
        lat: 51.5345,
        lng: 0.0905
    };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: bangalore
    }); // This event listener calls addMarker() when the map is clicked.

    google.maps.event.addListener(map, "click", event => {
        addMarker(event.latLng, map);
    }); // Add a marker at the center of the map.

    addMarker(bangalore, map);
} // Adds a marker to the map.

function addMarker(location, map) {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    new google.maps.Marker({
        position: location,
        label: labels[labelIndex++ % labels.length],
        map: map
    });
}

$(document).ready(function() {
var palettes = [
    "linear-gradient(to right, #F1FF94, #6FA2CB)",
    "linear-gradient(to right, #938EF2, #F2ABC4)",
    "linear-gradient(to right, #DE8550, #C9AED0)",
    "linear-gradient(to right, #E6949A, #A0CC9F)"
];
var randomPalette = palettes[Math.floor(Math.random() * palettes.length)];


$('body').css({
    'background-image': randomPalette,
});
});

$(".menu-btn").click(function() {
    // Toggle class "is-active"
    $(".menu").toggle();
    $(".close").toggle();
    $(".more").toggle();
    $(".content").toggle();
});


$(document).ready(function(){
    $('.content a').attr('target', '_blank');
});
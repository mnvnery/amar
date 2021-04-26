$(document).ready(function() {
var palettes = [
    "linear-gradient(to right, #F1FF94, #6FA2CB)",
    "linear-gradient(to right, #9F5098, #E7949A)",
    "linear-gradient(to right, #DE8550, #C9AED0)",
    "linear-gradient(to right, #E6949A, #A0CC9F)"
];
var randomPalette = palettes[Math.floor(Math.random() * palettes.length)];


$('body').css({
    'background-image': randomPalette,
});
});
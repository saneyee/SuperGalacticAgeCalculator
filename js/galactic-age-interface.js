import { GalacticAge } from './../js/galactic-age.js';

$(document).ready(function () {
$(".formOne").submit(function(event){
  event.preventDefault();

    let dob = new Date($("#dob").val());
    console.log(dob);
    let calculate = new GalacticAge(dob);

    $("#output").show();

    $('#ageseconds').text(calculate.ageToSeconds());

    $('#earth').text(calculate.ageOnEarth());
    $('#mercury').text(calculate.ageOnMercury());
    $('#venus').text(calculate.ageOnVenus());
    $('#mars').text(calculate.ageOnMars());
    $('#jupiter').text(calculate.ageOnJupiter());

    $('#earthexp').text(calculate.lifeExpectancyOnEarth());
    $('#mercuryexp').text(calculate.lifeExpectancyOnMercury());
    $('#venusexp').text(calculate.lifeExpectancyOnVenus());
    $('#marsexp').text(calculate.lifeExpectancyOnMars());
    $('#jupiterexp').text(calculate.lifeExpectancyOnJupiter());

});
});

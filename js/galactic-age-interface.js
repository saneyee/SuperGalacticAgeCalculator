import { GalacticAge } from './../js/galactic-age.js';

$(function(){
$(".formOne").submit(function(event){
  event.preventDefault();

    let dob = new Date($("#dob").val());
    let calculate = new GalacticAge(dob);

    $("#output").show();

    $('#ageseconds').text(calculate.ageToSeconds());

    $('#mercury').text(calculate.ageOnMercury());
    $('#venus').text(calculate.ageOnVenus());
    $('#mars').text(calculate.ageOnMars());
    $('#jupiter').text(calculate.ageOnJupiter());

    $('#mercuryexp').text(calculate.expectancyOnMercury());
    $('#venusexp').text(calculate.expectancyOnVenus());
    $('#marsexp').text(calculate.expectancyOnMars());
    $('#jupiterexp').text(calculate.expectancyOnJupiter());

});
});

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GalacticAge = exports.GalacticAge = function () {
  function GalacticAge(dob) {
    _classCallCheck(this, GalacticAge);

    this.dob = dob;
    this.lifeExpectancy = 78;
  }

  //ages on different planets


  _createClass(GalacticAge, [{
    key: "ageOnEarth",
    value: function ageOnEarth() {
      var birthdate = new Date(this.dob);
      var today = new Date();
      var diff = today - birthdate;
      var age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      return age;
    }
  }, {
    key: "ageToSeconds",
    value: function ageToSeconds() {
      var agetosec = parseInt(this.ageOnEarth() * 60 * 60 * 24 * 365);
      return agetosec;
    }
  }, {
    key: "ageOnMercury",
    value: function ageOnMercury() {

      var mercuryAge = parseInt(this.ageOnEarth() / 0.24);
      return mercuryAge;
    }
  }, {
    key: "ageOnVenus",
    value: function ageOnVenus() {
      var venusAge = parseInt(this.ageOnEarth() / 0.62);
      return venusAge;
    }
  }, {
    key: "ageOnMars",
    value: function ageOnMars() {
      var marsAge = parseInt(this.ageOnEarth() / 1.88);
      return marsAge;
    }
  }, {
    key: "ageOnJupiter",
    value: function ageOnJupiter() {
      var jupiterAge = parseInt(this.ageOnEarth() / 11.86);
      return jupiterAge;
    }

    //Life expectancy on different planets

  }, {
    key: "avgLifeExpectancy",
    value: function avgLifeExpectancy() {
      if (this.ageOnEarth() > this.lifeExpectancy) {
        alert("Congratulations!!!You have crossed the average lifeExpectancy");
      }
    }
  }, {
    key: "lifeExpectancyOnEarth",
    value: function lifeExpectancyOnEarth() {
      var lifeExpOnEarth = parseInt(this.lifeExpectancy - this.ageOnEarth());
      return lifeExpOnEarth;
    }
  }, {
    key: "lifeExpectancyOnMercury",
    value: function lifeExpectancyOnMercury() {
      var lifeExpOnMercury = parseInt(this.lifeExpectancyOnEarth() / 0.24);
      return lifeExpOnMercury;
    }
  }, {
    key: "lifeExpectancyOnVenus",
    value: function lifeExpectancyOnVenus() {
      var lifeExpOnVenus = parseInt(this.lifeExpectancyOnEarth() / 0.62);
      return lifeExpOnVenus;
    }
  }, {
    key: "lifeExpectancyOnMars",
    value: function lifeExpectancyOnMars() {
      var lifeExpOnMars = parseInt(this.lifeExpectancyOnEarth() / 1.88);
      return lifeExpOnMars;
    }
  }, {
    key: "lifeExpectancyOnJupiter",
    value: function lifeExpectancyOnJupiter() {
      var lifeExpOnJupiter = parseInt(this.lifeExpectancyOnEarth() / 11.86);
      return lifeExpOnJupiter;
    }
  }]);

  return GalacticAge;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _galacticAge = require("./../js/galactic-age.js");

$(document).ready(function () {
  $(".formOne").submit(function (event) {
    event.preventDefault();

    var dob = new Date($("#dob").val());
    console.log(dob);
    var calculate = new _galacticAge.GalacticAge(dob);

    $("#output").show();

    $('#ageseconds').text(calculate.ageToSeconds());

    $('#earth').text(calculate.ageOnEarth());
    $('#mercury').text(calculate.ageOnMercury());
    $('#venus').text(calculate.ageOnVenus());
    $('#mars').text(calculate.ageOnMars());
    $('#jupiter').text(calculate.ageOnJupiter());

    $('#mercuryexp').text(calculate.lifeExpectancyOnMercury());
    $('#venusexp').text(calculate.lifeExpectancyOnVenus());
    $('#marsexp').text(calculate.lifeExpectancyOnMars());
    $('#jupiterexp').text(calculate.lifeExpectancyOnJupiter());
  });
});

},{"./../js/galactic-age.js":1}]},{},[2]);

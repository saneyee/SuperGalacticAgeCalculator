import {GalacticAge} from './../js/galactic-age.js';

describe('GalacticAge', function() {
  it('should test whether age become seconds is true', function() {
    var calculate = new GalacticAge("1987-03-28")
    expect(calculate.ageToSeconds()).toEqual(946080000)
  });

  it('should test whether years in earth is true', function() {
    var calculate = new GalacticAge("1987-03-28")
    expect(calculate.ageOnEarth()).toEqual(30);
  });

    it('should test whether years in mercury is true', function() {
      var calculate = new GalacticAge("1987-03-28")
      expect(calculate.ageOnMercury()).toEqual(125);
    });

    it('should test whether years in venus is true', function() {
      var calculate = new GalacticAge("1987-03-28")
      expect(calculate.ageOnVenus()).toEqual(48);
    });

    it('should test whether years in mars is true', function() {
      var calculate = new GalacticAge("1987-03-28")
      expect(calculate.ageOnMars()).toEqual(15);
    });

    it('should test whether years in jupiter is true', function() {
      var calculate = new GalacticAge("1987-03-28")
      expect(calculate.ageOnJupiter()).toEqual(2);
    });

    it('should test whether remaining years in earth is true', function() {
      var calculate = new GalacticAge("1987-03-28")
      expect(calculate.lifeExpectancyOnEarth()).toEqual(48);
    });

    it('should test whether remaining years in mercury is true', function() {
      var calculate = new GalacticAge("1987-03-28")
      expect(calculate.lifeExpectancyOnMercury()).toEqual(200)
    });

    it('should test whether remaining years in venus is true', function() {
      var calculate = new GalacticAge("1987-03-28")
      expect(calculate.lifeExpectancyOnVenus()).toEqual(77)
    });

    it('should test whether remaining years in mars is true', function() {
      var calculate = new GalacticAge("1987-03-28")
      expect(calculate.lifeExpectancyOnMars()).toEqual(25)
    });

    it('should test whether remaining years in jupiter is true', function() {
      var calculate = new GalacticAge("1987-03-28")
      expect(calculate.lifeExpectancyOnJupiter()).toEqual(4)
    });
});

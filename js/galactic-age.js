export class GalacticAge {
  constructor(dob) {
      this.dob = dob;
      this.lifeExpectancy = 78;
}

//ages on different planets
ageOnEarth() {
    const birthdate = new Date(this.dob);
    let today = new Date();
    let diff = today-birthdate;
    let age = Math.floor(diff/(1000*60*60*24*365.25));
    return age;
}

ageToSeconds() {
    let agetosec = parseInt(this.ageOnEarth()*60*
    60*24*365);
    return agetosec;
}

ageOnMercury() {

  let mercuryAge = parseInt(this.ageOnEarth()/0.24);
  return mercuryAge;

}
ageOnVenus() {
  let venusAge = parseInt(this.ageOnEarth()/0.62);
  return venusAge;
}
ageOnMars() {
  let marsAge = parseInt(this.ageOnEarth()/1.88);
  return marsAge;
}
ageOnJupiter() {
  let jupiterAge = parseInt(this.ageOnEarth()/11.86);
  return jupiterAge;
}

//Life expectancy on different planets

avgLifeExpectancy() {
if (this.ageOnEarth() > this.lifeExpectancy) {
    alert("Congratulations!!!You have crossed the average lifeExpectancy");
}
}

lifeExpectancyOnEarth() {
    let lifeExpOnEarth = parseInt(this.lifeExpectancy - this.ageOnEarth());
  return lifeExpOnEarth;
}

lifeExpectancyOnMercury() {
  let lifeExpOnMercury = parseInt(this.lifeExpectancyOnEarth()/0.24);
  return lifeExpOnMercury;
}

lifeExpectancyOnVenus() {
  let lifeExpOnVenus = parseInt(this.lifeExpectancyOnEarth()/0.62);
  return lifeExpOnVenus;
}

lifeExpectancyOnMars() {
  let lifeExpOnMars = parseInt(this.lifeExpectancyOnEarth()/1.88);
  return lifeExpOnMars;
}

lifeExpectancyOnJupiter() {
  let lifeExpOnJupiter = parseInt(this.lifeExpectancyOnEarth()/11.86);
  return lifeExpOnJupiter;
}

}

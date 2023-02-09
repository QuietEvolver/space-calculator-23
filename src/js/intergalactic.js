export default class Calculator{
  constructor ( birthdayAge, planets) {
    this.birthdayAge = birthdayAge;
    this.planets = planets;
  }

  givenAgeValidation(){ 
    /* istanbul ignore else */// 
    if(this.birthdayAge === NaN ||this.birthdayAge < 0 || this.birthdayAge === undefined){
      console.log("Nan", (isNaN(this.birthdayAge)) )
      this.birthdayAge = 0;
      return this.birthdayAge; 
    } 
  }

  mercuryAge(){
    const birthdayAge = this.birthdayAge;
    return birthdayAge * .24;
  }

  venusAge(){
    const birthdayAge = this.birthdayAge;
    return birthdayAge * .62;
  }

  marsAge(){
    const birthdayAge = this.birthdayAge;
    return birthdayAge * 1.88;
  }

  jupiterAge(){
    const birthdayAge = this.birthdayAge;
    return birthdayAge * 11.86;
  }

  getYearsSinceBirthdayAge(){
      let birthdayAge = this.birthdayAge;
      let planets = this.planets;
      // // let earthAge = 1
      // // let mercuryAge = earthAge / .24
  
      // console.log('planets', planets);
      // console.log('this.planets', this.planets);
      let returnedPlanets = {}
  
      let planetAge = {
        earth: birthdayAge * 1,
        mercury: birthdayAge *.24,
        venus: birthdayAge * .62,
        mars: birthdayAge * 1.88,
        jupiter: birthdayAge * 11.86
      }
      // console.log('evaluated planetAge', planetAge)
      // console.log('planet:', planet, 'birthdayAge:', planetAge[planet])
  
      let planetsAgeArr = planets.forEach(planet => {
        returnedPlanets = {...returnedPlanets, [planet]: planetAge[planet]};

      console.log('returnedPlanets', returnedPlanets);
      });
      console.log('returnedPlanets', returnedPlanets);
  
      // let this.birthdayAge - pastAge/planet.
      // let futureAge-this.birthdayAge/planet.
      return planetsAgeArr;
  }
}
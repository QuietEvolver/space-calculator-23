export default class Calculator{
  constructor ( birthdayAge, planets) {
    this.birthdayAge = birthdayAge;
    this.planets = planets;
  }

  givenAgeValidation(){ 
    if((isNaN(this.birthdayAge) || this.birthdayAge < 0 || undefined)){
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


  // for each planet in plantes, do this. 
  // Map.

  getYearsSinceBirthdayAge(){//planetName
    //   let birthdayAge = this.birthdayAge;
    //   let planets = this.planets;

    
    //   const iCalculator = new Map(
    //   [
    //     ["Earth", 1],
    //     ["Mercury", .24],
    //     ["Venus", .62],
    //     ["Mars", 1.88], 
    //     ["Jupiter", 11.86]
    //   ]
    // );
    // if(birthdayAge > 0){
    //   return Number(birthdayAge - iCalculator.entries(planetName));
    // }
    // // iCalculator.entries()
  
      console.log('planets', planets);
      console.log('this.planets', this.planets);
      let returnedPlanets = {}
  
      let planetAge = {
        earth: birthdayAge,
        mercury: birthdayAge *.24,
        venus: birthdayAge * .62,
        mars: birthdayAge * 1.88,
        jupiter: birthdayAge * 11.86
      }
      console.log('evaluated planetAge', planetAge)
      // console.log('planet:', planet, 'age:', planetAge[planet])
  
      let planetsAgeArr = planets.forEach(planet => {
        returnedPlanets = {...returnedPlanets, [planet]: planetAge[planet]}
      })
      console.log('returnedPlanets', returnedPlanets);
  
      return planetsAgeArr;

  }
}
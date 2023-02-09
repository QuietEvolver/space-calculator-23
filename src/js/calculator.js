export default class Calculator{
  constructor ( birthdayAge, planet, pastBday, futurebday) {
    this.birthdayAge = birthdayAge;
    this.planet = planet;
  }

  // givenAgeValidation(){
  //   // [istanbul]
  //   if(this.birthdayAge === NaN || this.birthdayAge < 0 || this.birthdayAge === undefined){
  //     this.birthdayAge = 0;
  //     return this.birthdayAge; 
  //   } 
  // }

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

  getYearsSinceBirthdayAge(){//planetName
  //   let birthdayAge = this.birthdayAge;
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
  }
}

export default class Calculator{
  constructor ( birthdayAge) {
    this.birthdayAge = birthdayAge;
  }

  givenAgeValidation(){
    /* istanbul ignore else */ 
    if(this.birthdayAge === NaN  || this.birthdayAge < 0 || this.birthdayAge === undefined){
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

//   getYearsSinceBirthdayAge(birthdayAge) {
//       // this.birthdayAge = birthdayAge;
//       console.log('planets', planets);
//       // let returnedPlanets = {}
  
//       let planetAge = {
//         earth: birthdayAge,
//         mercury: birthdayAge *.24,
//         venus: birthdayAge * .62,
//         mars: birthdayAge * 1.88,
//         jupiter: birthdayAge * 11.86
//       }
//       console.log('evaluated planetAge', planetAge);

//       return planetAge;
//   }

  yearsUntil(pastBdayAgeEntered) {
    let yearsPassed = this.birthdayAge - pastBdayAgeEntered;
    let yearsPassedObj = {
      earth: yearsPassed,
      mercury: yearsPassed *.24,
      venus: yearsPassed * .62,
      mars: yearsPassed * 1.88,
      jupiter: yearsPassed * 11.86
  }
    return yearsPassedObj;
  }

  yearsInFuture(futureBdayAgeEntered) {
    let yearsInFuture = futureBdayAgeEntered - this.birthdayAge;
    let yearsFutureObj = {
      earth: yearsInFuture,
      mercury: yearsInFuture *.24,
      venus: yearsInFuture * .62,
      mars: yearsInFuture * 1.88,
      jupiter: yearsInFuture * 11.86
    }
    return yearsFutureObj;  
  }
}

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

  getYearsSinceBirthdayAge(){
    
  }
}
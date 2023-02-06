
/* ### 1 #######
BI takes a person's age in years and create a class that does the following:

Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
Returns their age in Venus years. (A Venus year is .62 Earth years.)
Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)

### 2 ##### Determines how many years have passed on each planet since a past birthday. For example, if a user is 56 and we want to calculate how many years have passed since their 43 birthday, we would find the following results:
13 Earth years have passed.
54.16 Mercury years have passed.
8.06 Venus years have passed.
6.91 Mars years have passed.
1.09 Jupiter years have passed.

### 3 ##### Determines how many years have yet to pass until a future birthday. For example, if a user is 56 years and we want to calculate how many years have yet to pass until they are 61 years old, we would find the following results:
5 Earth years have yet to pass.
20.83 Mercury years have yet to pass.
20.96 Venus years have yet to pass.
2.65 Mars years have yet to pass.
0.42 Jupiter years have yet to pass. */


export default class Calculator{
  constructor ( birthdayAge) {
    this.birthdayAge = birthdayAge;
  }

  givenAgeValidation(){ 
    if((isNaN(this.birthdayAge) || this.birthdayAge < 0 || undefined)){
      console.log(this.birthdayAge, "This bdayAge");
      return this.birthdayAge = 0;
    } 
      // return this.birthdayAge;
    
    // if (this.birthdayAge === undefined){
    //   return this.birthdayAge = 0;
    // }
    // if(this.birthdayAge !== 0){
    //   return this.birthdayAge;
    // }
    // if (isNaN(this.birthdayAge))
    // {
    //   return NaN;
    // }
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

  // getYearsSinceBirthdayAge(){//planetName
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
  // }
}
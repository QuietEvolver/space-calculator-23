
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

  givenAgeValidation(){//if(this.birthdayAge !== 0)  
    // if (this.birthdayAge === undefined){
    //   this.birthdayAge = 0;//this.birthdayAge
    if(this.birthdayAge !== 0){
        return this.birthdayAge;//this.birthdayAge
  //   } else return 0;
  //   // if (isNaN(this.birthdayAge))
  //   // {
  //   //   this.birthdayAge = NaN;
  //   //   return this.birthdayAge;
    }
  }

  //     ["Mercury", .24]
  mercuryAge(){
    const birthdayAge = this.birthdayAge;
    return birthdayAge * .24;
  }

  // ["Venus", .62]
  venusAge(){
    const birthdayAge = this.birthdayAge;
    return birthdayAge * .62;
  }

  //     ["Mars", 1.88]
  marsAge(){
    const birthdayAge = this.birthdayAge;
    return birthdayAge * 1.88;
  }

  //     ["Jupiter", 11.86]
  jupiterAge(){
    const birthdayAge = this.birthdayAge;
    return birthdayAge * 11.86;
  }


  // for each planet in plantes, do this. 
  // Map.


  // getYearsSinceBirthdayAge(planetName){
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

// //Years
// export const mercuryYear = .24;
// export const venusYear = .62;
// export const marsYear = 1.88;
// export const jupiterYear = 11.86;
// export const earthYear = 1;
// //Days
// export const mercuryDaysInYear = 88;
// export const venusDaysInYear =  243;
// export const marsDaysInYear = 320;
// export const jupiterDaysInYear = 4332.59;
// export const earthDaysInYear = 365.25;


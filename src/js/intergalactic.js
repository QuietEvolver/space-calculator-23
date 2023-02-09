export default class Calculator{
  constructor ( birthdayAge) {
    this.birthdayAge = birthdayAge;
  }

  givenAgeValidation(){
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

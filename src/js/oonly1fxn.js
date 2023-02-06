
/* 
healthPlusOne() {
    if(this.health !== 0) {
    return this.health += 1;
    } else {
      return this.health;
    }
  }

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

/*
const Calculator = (birthdayAge, planet) => {
    if (planet === 'earth') {
      return {earth: birthdayAge};
    }
    if (planet === 'mercury') {
      return {mercury: birthdayAge * .24};
    }
    if (planet === 'venus') {
      return {venus: birthdayAge * .62};
    }
    if (planet === 'mars') {
      return {mars: birthdayAge * 1.88};
    }
    if (planet === 'jupiter') {
      return {jupiter: birthdayAge * 11.86};
    }
    if (planet === 'all') {
      return {
        earth: birthdayAge,
        mercury: birthdayAge *.24,
        venus: birthdayAge * .62,
        mars: birthdayAge * 1.88,
        jupiter: birthdayAge * 11.86
      }
    }
  } 
*/


export default class Calculator{
  constructor ( birthdayAge, planets ) {
    // this.birthdayAge = birthdayAge;
    // this.planet = planet;
    // console.log("birthdayAge: ", this.birthdayAge);
    console.log('planets', planets);
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

    // if (planet === 'earth') {
    //   return {earth: this.birthdayAge};
    // }
    // if (planet === 'mercury') {
    //   return {mercury: birthdayAge * .24};
    // }
    // if (planet === 'venus') {
    //   return {venus: birthdayAge * .62};
    // }
    // if (planet === 'mars') {
    //   return {mars: birthdayAge * 1.88};
    // }
    // if (planet === 'jupiter') {
    //   return {jupiter: birthdayAge * 11.86};
    // }
    // if (planet === 'all') {
    //   return {
    //     earth: birthdayAge,
    //     mercury: birthdayAge *.24,
    //     venus: birthdayAge * .62,
    //     mars: birthdayAge * 1.88,
    //     jupiter: birthdayAge * 11.86
    //   }
    // }

  }
}
//   givenAgeValidation(){//if(this.birthdayAge !== 0)  
//     let birthdayAge = this.birthdayAge;
//     // console.log('birthdayAge', birthdayAge);
//     if (birthdayAge == undefined){
//       console.log("birthdayAge: ", birthdayAge);
//       birthdayAge = 0;
//       console.log('birthdayAge', birthdayAge);
      
//     }
//     // if(this.birthdayAge !== 0){
//     //   return this.birthdayAge;
//     // }
//     // if (isNaN(this.birthdayAge))
//     // {
//     //   return NaN;
//     // } 
//     // else{ 
//     //   // console.log('birthdayAge', this.birthdayAge);
//     //   birthdayAge = this.birthdayAge;
//     // }
//     return birthdayAge;
//   }

//   // givenAgeUndefined(){
//   //   // if (this.birthdayAge === undefined){
//   //   //   return this.birthdayAge = 0;
//   //   }
//   // }

//   PlanetCalc (birthdayAge, planet) {
//     if (planet === 'earth') {
//       return {earth: birthdayAge};
//     }
//     if (planet === 'mercury') {
//       return {mercury: birthdayAge * .24};
//     }
//     if (planet === 'venus') {
//       return {venus: birthdayAge * .62};
//     }
//     if (planet === 'mars') {
//       return {mars: birthdayAge * 1.88};
//     }
//     if (planet === 'jupiter') {
//       return {jupiter: birthdayAge * 11.86};
//     }
//     if (planet === 'all') {
//       return {
//         earth: birthdayAge,
//         mercury: birthdayAge *.24,
//         venus: birthdayAge * .62,
//         mars: birthdayAge * 1.88,
//         jupiter: birthdayAge * 11.86
//       }
//     }
//   } 


//   mercuryAge(){
//     const birthdayAge = this.birthdayAge;
//     return birthdayAge * .24;
//   }

//   venusAge(){
//     const birthdayAge = this.birthdayAge;
//     return birthdayAge * .62;
//   }

//   marsAge(){
//     const birthdayAge = this.birthdayAge;
//     return birthdayAge * 1.88;
//   }

//   jupiterAge(){
//     const birthdayAge = this.birthdayAge;
//     return birthdayAge * 11.86;
//   }


//   // for each planet in plantes, do this: Map.
//   // getYearsSinceBirthdayAge(planetName){
//   //   let birthdayAge = this.birthdayAge;
//   //   console.log("this.birthdayAge: ", this.birthdayAge);
//   //   console.log("birthdayAge: ", birthdayAge);
//   //   const iCalculator = new Map(
//   //     [
//   //       ["Earth", 1],
//   //       ["Mercury", .24],
//   //       ["Venus", .62],
//   //       ["Mars", 1.88], 
//   //       ["Jupiter", 11.86]
//   //     ]
//   //   );
//   //   console.log('iCalculator', iCalculator);
//   //   if(birthdayAge > 0){
//   //     console.log("birthdayAge - iCalculator.entries(planetName): ", birthdayAge - iCalculator.entries(planetName));
//   //     return Number(birthdayAge - iCalculator.entries(planetName));
//   // }
//   }
//   // // // iCalculator.entries()
  
//     // getYearsToFutureBirthdayAge(planetName){//planetName
//     //   let birthdayAge = this.birthdayAge;
//     //   const iCalculator = new Map(
//     //   [
//     //     ["Earth", 1],
//     //     ["Mercury", .24],
//     //     ["Venus", .62],
//     //     ["Mars", 1.88], 
//     //     ["Jupiter", 11.86]
//     //   ]
//     // );
//     // if(birthdayAge > 0){
//     //   let age = Number(iCalculator.entries(planetName - birthdayAge))
//     //   return age;
//     // }
//   // }
// // }

// // //Years
// // export const mercuryYear = .24;
// // export const venusYear = .62;
// // export const marsYear = 1.88;
// // export const jupiterYear = 11.86;
// // export const earthYear = 1;
// // //Days
// // export const mercuryDaysInYear = 88;
// // export const venusDaysInYear =  243;
// // export const marsDaysInYear = 320;
// // export const jupiterDaysInYear = 4332.59;
// // export const earthDaysInYear = 365.25;

// /*
// let value = this.size; 
//   for (const [key, value] of data) {
//     if (key === "size") {
//       size = value;
//     }
//     // let msg = "Choose an option";
//     switch(size){
//       case("Earth"): 
//         this.size = "small";
//         sizePrice = 5;
//         return sizePrice;
//       case("medium"): 
//         this.size = "medium";
//         sizePrice = 10;
//         return sizePrice;
//       case("large"):
//         this.size = "large";
//         sizePrice = 15;
//         return sizePrice;
//       default: 
//       console.log("Choose a sz");
//       // output.innerHTML = msg;  // webAPI: MessageChannel; 
//     }
//   }
//   */
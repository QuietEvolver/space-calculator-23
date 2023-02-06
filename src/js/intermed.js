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

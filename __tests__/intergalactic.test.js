import Calculator from "../src/js/intergalactic";

describe('Calculator', () => {
  
  test('Should hold an age given an inputted age', () => {
    const calculator =  new Calculator(92);
    expect(calculator.birthdayAge).toEqual(92);
  });

  // test('Should account for validation of an undefined an inputted age', () => {
  //   const calculator = new Calculator(undefined);
  //   expect(calculator.givenAgeValidation()).toEqual(0);
  // }); 

  // test('Should test validation of an age given an inputted age is not an integer', () => {
  // const calculator =  new Calculator(0);
  // expect(calculator.givenAgeValidation()).toEqual(0);
  // });

  // test('Should test validation of an age given an inputted age is not an integer', () => {
  //   const calculator =  new Calculator(0);
  //   expect(calculator.givenAgeValidation()).toEqual(0);
  // });
  
  // // if NaN
  // test('Should test validation of an age given an inputted age is not an integer', () => {
  //   const calculator =  new Calculator("%");
  //   expect(calculator.birthdayAge).toEqual(NaN);
  //   expect(calculator.givenAgeValidation()).toEqual(NaN);
  // });

  test('Should test Mercury age given an inputted age', () => {
    const calculator =  new Calculator(4);
    expect(calculator.mercuryAge()).toEqual(0.96);
  });

  test('Should test Venus age given an inputted age', () => {
    const calculator =  new Calculator(4);
    expect(calculator.venusAge()).toEqual(2.48);
  });

  test('Should test Mars age given an inputted age', () => {
    const calculator =  new Calculator(4);
    expect(calculator.marsAge()).toEqual(7.52);
  });

  test('Should test Jupiter age given an inputted age', () => {
    const calculator =  new Calculator(4);
    expect(calculator.jupiterAge()).toEqual(47.44);
  });
////43
    // test('Should test one age to the next age given an inputted age', () => {
    //   const calculator =  new Calculator("Earth", "Mercury", "Venus", "Mars", "Jupiter");
    //   expect(calculator.getYearsSinceBirthdayAge()).toEqual(4, .96, 2.48, 7.52, 47.44);
    // });
    
    // test('Should test: Lee', () => {
    //   const calculator =  new Calculator(5, [ "earth", "mercury", "venus", "mars", "jupiter" ]);
    //   console.log('calculator', calculator);
    // // expect(calculator.getYearsSinceBirthdayAge()).toEqual(59.3, "jupiter");
    // });
});
import Calculator from "../src/js/intergalactic";

describe('Calculator', () => {
  
  test('Should hold an age given an inputted age', () => {
    const calculator =  new Calculator(92);
    expect(calculator.birthdayAge).toEqual(92);
  });

  test('Should account for validation of an NaN an inputted age', () => {
    const calculator = new Calculator();
    calculator.givenAgeValidation();
    expect(calculator.birthdayAge).toEqual(0);
  }); 

  test('Should account for validation of an undefined an inputted age', () => {
    const calculator = new Calculator(undefined);
    expect(calculator.givenAgeValidation()).toEqual(0);
  }); 

  test('Should test validation of an age is not equal to zero', () => {
  const calculator =  new Calculator();
  expect(calculator.givenAgeValidation()).toEqual(0);
  expect(calculator.birthdayAge).toEqual(0);
  });

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
        
    // test('Should test: Loop at each planet(s)', () => {
    //   const calculator =  new Calculator(5, [ "earth", "mercury", "venus", "mars", "jupiter" ]);
    //   console.log('calculator', calculator.getYearsSinceBirthdayAge());

    //   // expect(calculator.getYearsSinceBirthdayAge()).toEqual(59.3, "jupiter");
    // });
    
    // test('Should test entry of each given parameter looped', () => {
    //   const calculator =  new Calculator();
    //   //5,  [ "earth", "mercury", "venus", "mars", "jupiter"] 
    //   console.log('calculator', calculator);
    //   calculator.getYearsSinceBirthdayAge();
    //   expect(planetAge).toEqual([5,"earth"], 
    //     [ 1.2,"mercury",
    //      3.1,"venus",
    //      9.399999999999999,"mars" ,
    //      59.3,"jupiter"]);
    // });
});
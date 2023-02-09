import Calculator from "../src/js/calculator";

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

  // test('Should account for validation of an undefined an inputted age', () => {
  //   const calculator = new Calculator(undefined);
  //   expect(calculator.givenAgeValidation()).toEqual(0);
  // }); 
  
  // test('Should test validation of an age is not equal to zero', () => {
  // const calculator =  new Calculator();
  // expect(calculator.givenAgeValidation()).toEqual(0);
  // expect(calculator.birthdayAge).toEqual(0);
  // });

  // test('should create an earth age', () => {
  //   const calculator =  new Calculator(5);
  //   expect(calculator.birthdayAge).toEqual(15);
  // });

  // test('should correctly say how many Earth years have passed since last birthday', () => {
  //   calculator.earthAge(12);
  //   expect(calculator.yearsSince).toEqual(15);
  // })
  // test('should correctly say how many Earth years until a persons future birthday', () => {
  //   calculator.earthAge(5);
  //   expect(calculator.yearsUntil).toEqual(13)
  // })

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
  // test('Should test: all planets', () => {
  //   const calculator =  new Calculator(5, [ "earth", "mercury", "venus", "mars", "jupiter" ]);
  //   console.debug('calculator', calculator);
  //   let testAge = calculator.getYearsSinceBirthdayAge(5);
  //   expect(testAge.jupiter).toEqual(59.3);
  // });
});
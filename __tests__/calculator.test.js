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
  // test('Should test: all planets', () => {
  //   const calculator =  new Calculator(5, [ "earth", "mercury", "venus", "mars", "jupiter" ]);
  //   console.debug('calculator', calculator);
  //   let testAge = calculator.getYearsSinceBirthdayAge(5);
  //   expect(testAge.jupiter).toEqual(59.3);
  // });

  test('Should test how many years has passed since X birthday on Earth', () => {
    const calculator = new Calculator(5);
    let yearsUntilAgeTest = calculator.yearsUntil(2);
    expect(yearsUntilAgeTest.earth).toEqual(3);
  });

  test('Should test: how many years has passed since X birthday on Jupiter', () => {
    const calculator = new Calculator(5);
    let yearsUntilAgeTest = calculator.yearsUntil(2);
    expect(yearsUntilAgeTest.jupiter).toEqual(35.58);
  });

  test('Should test: how many years has until X birthday', () => {
    const calculator = new Calculator(5);
    let yearsFutureTest = calculator.yearsFuture(7);
    expect(yearsFutureTest.earth).toEqual(2);
  });

  test('Should test: how many years until X birthday', () => {
    const calculator = new Calculator(5);
    let yearsInFutureTest = calculator.yearsInFuture(7);
    expect(yearsInFutureTest.earth).toEqual(2);
  });
});
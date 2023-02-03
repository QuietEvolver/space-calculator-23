import Calculator from "../src/js/intergalactic";

describe('Calculator', () => {
  
  test('Should hold an age given an inputted age', () => {
    const calculator =  new Calculator(92);
    expect(calculator.birthdayAge).toEqual(92);
  });

  test('Should account for validation of an age given an inputted age', () => {
    const calculator =  new Calculator(92);
    expect(calculator.givenAgeValidation()).toEqual(92);
  }); 

  // if undef
  // test('Should test validation of an age given an inputted age to return 0 if not inputted', () => {
  //   const calculator =  new Calculator(0);
  //   expect(calculator.givenAgeValidation()).toEqual(0);
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
//undef
    // test('Should test one age to the next age given an inputted age', () => {
    //   const calculator =  new Calculator("Mercury");
    //   expect(calculator.getYearsSinceBirthdayAge()).toEqual(43);
    // });
});
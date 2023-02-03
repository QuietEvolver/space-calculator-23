import Calculator from "../src/js/intergalactic";

describe('Calculator', () => {
  
  test('Should hold an age given an inputted age', () => {
    const calculator =  new Calculator(92);
    expect(calculator.birthdayAge).toEqual(92);
  });

  test('Should account for validation of an age given an inputted age', () => {
    const calculator =  new Calculator(0);
    expect(calculator.birthdayAge).toEqual(0);
  }); 

  // //if undef
  // test('Should account for validation of an age given an inputted age', () => {
  //   const calculator =  new Calculator("undefined");
  //   expect(calculator.birthdayAge).toEqual(0);
  // });
  
});
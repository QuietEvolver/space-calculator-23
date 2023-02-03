import Calculator from "../src/js/intergalactic";

describe('Calculator', () => {
  
  test('Should return an age given an inputted age', () => {
    const calculator =  new Calculator(92);
    expect(calculator.birthdayAge).toEqual(92);
  });
});
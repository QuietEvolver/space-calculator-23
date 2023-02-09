import Calculator from "../src/js/intergalactic";

describe('Calculator', () => {

    
    test('Should test: Lee', () => {
      const calculator =  new Calculator(5, [ "earth", "mercury", "venus", "mars", "jupiter" ]);
     // console.log('calculator', calculator);

      // expect(calculator.getYearsSinceBirthdayAge()).toEqual(59.3, "jupiter");
    });
});
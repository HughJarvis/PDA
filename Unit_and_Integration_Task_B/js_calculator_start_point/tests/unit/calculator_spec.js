var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

it('can add four to one', function(){
  calculator.previousTotal = 1;
  calculator.add(4);
  assert.equal(5, calculator.runningTotal);
});

it('can subtract 4 from 7', function(){
  calculator.previousTotal = 7;
  calculator.subtract(4);
  assert.equal(3, calculator.runningTotal);
});

it('can multiply three by 5', function(){
  calculator.previousTotal = 3;
  calculator.multiply(5);
  assert.equal(15, calculator.runningTotal);
});

it('can divide 21 by 7', function(){
  calculator.previousTotal = 21;
  calculator.divide(7);
  assert.equal(3, calculator.runningTotal);
});

it('can concatenate multiple number clicks', function(){
  calculator.numberClick(4);
  calculator.numberClick(3);
  calculator.numberClick(2);
  assert.equal(432, calculator.runningTotal);
});

it('can chain multiple operations together', function(){
  calculator.numberClick(2);
  calculator.operatorClick('*');
  calculator.numberClick(3);
  calculator.operatorClick('+');
  calculator.numberClick(4);
  calculator.operatorClick('-');
  calculator.numberClick(5);
  assert.equal(5, calculator.runningTotal);
});

it('clear the running total without affecting calculation', function(){
  calculator.numberClick(2);
  calculator.operatorClick('*');
  calculator.numberClick(3);
  calculator.clearClick();
  calculator.numberClick(4);
  calculator.operatorClick('=')
  assert.equal(8, calculator.runningTotal)
});


});

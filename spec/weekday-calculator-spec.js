// import {Calender} from './../src/calculator.js';
//
// describe('Calender', function() {
//
// it('will test if its a leap year', function () {
//   var year = new Calender(1,1,2000)
//   expect(year.checkYear()).toEqual(true);
//
//
//   })
// })

import {Haiku} from '../src/haiku.js';

describe('Haiku', function() {


it('will chceck easy test', function() {
  var year = new Haiku("cat", "cat", "cat")
  expect(year.checkWords()).toEqual(true);
  })

it('will chceck easy test', function() {
  var year = new Haiku("dog", "cat", "cat")
  expect(year.checkWordss()).toEqual(true);
  })
})

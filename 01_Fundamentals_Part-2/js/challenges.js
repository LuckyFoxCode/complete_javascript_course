'use strict';

// * Challenge #1

const calcAverage = (scoreA, scoreB, scoreC) => (scoreA + scoreB + scoreC) / 3;

const teamDolphinsDataOne = calcAverage(44, 23, 71);
const teamKoalasDataOne = calcAverage(65, 54, 49);

const teamDolphinsDataTwo = calcAverage(85, 54, 41);
const teamKoalasDataTwo = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log('No one wins');
  }
};

checkWinner(teamDolphinsDataOne, teamKoalasDataOne);
checkWinner(teamDolphinsDataTwo, teamKoalasDataTwo);

// * Challenge #2

const calcTip = function (value) {
  if (value <= 300 && value >= 50) {
    return value * 0.15;
  } else {
    return value * 0.2;
  }
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(calcTip(100));
console.log(tips);
console.log(total);

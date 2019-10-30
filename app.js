'use strict';

console.log('proof of life');

var userName = prompt('Howdy! What is your name?');
// console.log('It is a pleasure to meet you ' + userName + '!');
alert('It is a pleasure to meet you ' + userName + '!');
// var = var.toLowerCase();

alert('Thanks for visiting my page. Let\'s play a guessing game!');

var danGrad = prompt('True or false, I finished college in 4 years.');
danGrad = danGrad.toLowerCase();

if (danGrad === 'false'){
  //console.log('Correct! I was a super duper senior');
  alert('Correct! I was a super duper senior.');
} else{
  //console.log('Whoops! You wrong. Hopefully you paid more attention than I did, huh?');
  alert('Whoops! You wrong. Hopefully you paid more attention than I did, huh?');
}

var danBff = prompt('Yes or No, my best friend is named Mellow.');
danBff = danBff.toLowerCase();

if (danBff === 'yes' || danBff === 'y'){
  //console.log('Correct! Y\'all should meet and be buds too.');
  alert('Correct! Y\'all should meet and be buds too.');
} else{
  //console.log('Sorry. That is incorrect. No pets for anybody :(');
  alert('Sorry. That is incorrect. No pets for anybody :(');
}

var danDegree = prompt('Yes or No, I graduated with a degree in Ethics');
danDegree = danDegree.toLowerCase();

if (danDegree === 'no' || danDegree === 'n'){
  //console.log('Correct! I went for the much more lucrative English degree.');
  alert('Correct! I went for the much more lucrative English degree.');
} else{
  //console.log('Bzzzz! Wrong. Ethics schmethics!');
  alert('Bzzzz! Wrong. Ethics schmethics!');
}

var danJob = prompt('Yes or No, I used to work in digital advertising sales.');
danJob = danJob.toLowerCase();

if (danJob === 'yes' || danJob === 'y'){
  //console.log('Correct! I used to sell ads to lawyers. Ugh.');
  alert('Correct! I used to sell ads to lawyers. Ugh.');
} else{
  //console.log('Your answer is wrong. But I wish you were right! That job was meh.');
  alert('Your answer is wrong. But I wish you were right! That job was meh.');
}

var danGoal = prompt('Yes or No, I am hoping to get a job in tech!');
danGoal = danGoal.toLowerCase();

if (danGoal === 'yes' || danGoal === 'y'){
  //console.log('Correct. Can you halp me plz?');
  alert('Correct. Can you halp me plz?');
} else{
  console.log('No?! Are you not a believer? C\'mon get on the team!');
  alert('No?! Are you not a believer? C\'mon get on the team!');
}

alert('Thanks for taking my quiz ' + userName + '. Please click through to learn more about me!');
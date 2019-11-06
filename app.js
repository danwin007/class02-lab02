'use strict';

console.log('proof of life');

var totalScore = 0;
var userName = prompt('Howdy! What is your name?');
// console.log('It is a pleasure to meet you ' + userName + '!');
alert('It is a pleasure to meet you ' + userName + '!');


alert('Thanks for visiting my page. Let\'s play a guessing game!');

// Question One - College

function questionOne(danGrad) {
  danGrad = prompt('True or false, I finished college in 4 years. Question 1/7');
  danGrad = danGrad.toLowerCase();

  if (danGrad === 'false'){
    //console.log('Correct! I was a super duper senior');
    alert('Correct! I was a super duper senior.');
    totalScore++;
  } else{
    //console.log('Whoops! You wrong. Hopefully you paid more attention than I did, huh?');
    alert('Whoops! You wrong. Hopefully you paid more attention than I did, huh?');
  }
}
questionOne();

// Question Two - BFF

function questionTwo(danBff){
  danBff = prompt('Yes or No, my best friend is named Mellow. Question 2/7');
  danBff = danBff.toLowerCase();

  if (danBff === 'yes' || danBff === 'y'){
    //console.log('Correct! Y\'all should meet and be buds too.');
    alert('Correct! Y\'all should meet and be buds too.');
    totalScore++;
  } else{
    //console.log('Sorry. That is incorrect. No pets for anybody :(');
    alert('Sorry. That is incorrect. No pets for anybody :(');
  }
}
questionTwo();

// Question Three - School

function questionThree(danDegree){
  danDegree = prompt('Yes or No, I graduated with a degree in Ethics. Question 3/7');
  danDegree = danDegree.toLowerCase();

  if (danDegree === 'no' || danDegree === 'n'){
    //console.log('Correct! I went for the much more lucrative English degree.');
    alert('Correct! I went for the much more lucrative English degree.');
    totalScore++;
  } else{
    //console.log('Bzzzz! Wrong. Ethics schmethics!');
    alert('Bzzzz! Wrong. Ethics schmethics!');
  }
}
questionThree();

// Question 4 - Job

function questionFour(danJob){
  danJob = prompt('Yes or No, I used to work in digital advertising sales. Question 4/7');
  danJob = danJob.toLowerCase();

  if (danJob === 'yes' || danJob === 'y'){
    //console.log('Correct! I used to sell ads to lawyers. Ugh.');
    alert('Correct! I used to sell ads to lawyers. Ugh.');
    totalScore++;
  } else{
    //console.log('Your answer is wrong. But I wish you were right! That job was meh.');
    alert('Your answer is wrong. But I wish you were right! That job was meh.');
  }
}
questionFour();

// Question 5 - Goal

function questionFive(danGoal){
  danGoal = prompt('Yes or No, I am hoping to get a job in tech! Question 5/7');
  danGoal = danGoal.toLowerCase();

  if (danGoal === 'yes' || danGoal === 'y'){
    //console.log('Correct. Can you halp me plz?');
    alert('Correct. Can you halp me plz?');
    totalScore++;
  } else{
    console.log('No?! Are you not a believer? C\'mon get on the team!');
    alert('No?! Are you not a believer? C\'mon get on the team!');
  }
}
questionFive();

// Question 6 - Age

function questionSix(danAge){

  danAge = prompt('Can you guess how old I am? I will give you 4 attempts. Question 6/7');
  var danAgeAttempt = 1;

  for (danAgeAttempt; danAgeAttempt < 5; danAgeAttempt++) {
    while (isNaN(danAge)){
      danAge = prompt('That is not a number. Please enter a number');
    }
    // eslint-disable-next-line
    if (danAge == 33){
      console.log('Correct! On to the last question.');
      alert('Correct! On to the last question.');
      totalScore++;
      break;
    } else if (danAgeAttempt === 4){
      console.log('All out of guesses! I am 33.');
      alert('All out of guesses! I am 33.');
      break;
    } else if (danAge < 33){
      console.log('Oops, too low. Aim higher! ' + danAgeAttempt + ' attempts so far.');
      alert('Oops, too low. Aim higher! ' + danAgeAttempt + ' attempts so far.');
      danAge = prompt('Try again! How old am I?');
    } else if (danAge > 33){
      console.log('Oops, too high. Aim lower! ' + danAgeAttempt + ' attempts so far.');
      alert('Oops, too high. Aim lower! ' + danAgeAttempt + ' attempts so far.');
      danAge = prompt('Try again! How old am I?');
    }
  }
}
questionSix();

// Question 7 - Fave Movie

function questionSeven(danMovie){

  danMovie = ['hook', 'memento', 'the shawshank redemption', 'the matrix', 'titan a.e.', 'lord of the rings', 'unforgiven', 'superbad', 'brick', 'in bruges'];

  var movieAttempt = 0;

  for (movieAttempt; movieAttempt <= 5; movieAttempt++) {
    if (movieAttempt === 0) {
      var movieGuess = prompt('Can you guess one of my favorite movies? You get 6 attempts. I like Sci-fi, Fantasy, kids movies, westerns, and some artsy nonsense. Question 7/7');
    }
    movieGuess = movieGuess.toLowerCase();
    if (danMovie.indexOf(movieGuess) > -1) {
      alert('You got it!');
      totalScore++;
      break;
      // eslint-disable-next-line
    } else if (movieAttempt == 5){
      console.log('All out of guesses! My faves are ' + danMovie + '.');
      alert('All out of guesses! My faves are ' + danMovie + '.');
    } else if (danMovie.indexOf(movieGuess) <= -1){
      console.log('Not quite! Keep guessing! ' + (5 - movieAttempt) + ' guesses left.');
      alert('Not quite! Keep guessing! ' + (5 - movieAttempt) + ' guesses left.');
      movieGuess = prompt('Try again. What is one of my fave movies? ' + (5 - movieAttempt) + ' guesses left.');
    }
  }
}
questionSeven();

alert('Thanks for taking my quiz ' + userName + '. You got ' + totalScore + ' correct answers. Please click through to learn more about me!');

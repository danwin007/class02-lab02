'use strict';

console.log('proof of life');

var totalScore = 0;
var userName = prompt('Howdy! What is your name?');
// console.log('It is a pleasure to meet you ' + userName + '!');
alert('It is a pleasure to meet you ' + userName + '!');
// var = var.toLowerCase();

alert('Thanks for visiting my page. Let\'s play a guessing game!');

var danGrad = prompt('True or false, I finished college in 4 years. Question 1/7');
danGrad = danGrad.toLowerCase();

if (danGrad === 'false'){
  //console.log('Correct! I was a super duper senior');
  alert('Correct! I was a super duper senior.');
  totalScore++;
} else{
  //console.log('Whoops! You wrong. Hopefully you paid more attention than I did, huh?');
  alert('Whoops! You wrong. Hopefully you paid more attention than I did, huh?');
}

var danBff = prompt('Yes or No, my best friend is named Mellow. Question 2/7');
danBff = danBff.toLowerCase();

if (danBff === 'yes' || danBff === 'y'){
  //console.log('Correct! Y\'all should meet and be buds too.');
  alert('Correct! Y\'all should meet and be buds too.');
  totalScore++;
} else{
  //console.log('Sorry. That is incorrect. No pets for anybody :(');
  alert('Sorry. That is incorrect. No pets for anybody :(');
}

var danDegree = prompt('Yes or No, I graduated with a degree in Ethics. Question 3/7');
danDegree = danDegree.toLowerCase();

if (danDegree === 'no' || danDegree === 'n'){
  //console.log('Correct! I went for the much more lucrative English degree.');
  alert('Correct! I went for the much more lucrative English degree.');
  totalScore++;
} else{
  //console.log('Bzzzz! Wrong. Ethics schmethics!');
  alert('Bzzzz! Wrong. Ethics schmethics!');
}

var danJob = prompt('Yes or No, I used to work in digital advertising sales. Question 4/7');
danJob = danJob.toLowerCase();

if (danJob === 'yes' || danJob === 'y'){
  //console.log('Correct! I used to sell ads to lawyers. Ugh.');
  alert('Correct! I used to sell ads to lawyers. Ugh.');
  totalScore++;
} else{
  //console.log('Your answer is wrong. But I wish you were right! That job was meh.');
  alert('Your answer is wrong. But I wish you were right! That job was meh.');
}

var danGoal = prompt('Yes or No, I am hoping to get a job in tech! Question 5/7');
danGoal = danGoal.toLowerCase();

if (danGoal === 'yes' || danGoal === 'y'){
  //console.log('Correct. Can you halp me plz?');
  alert('Correct. Can you halp me plz?');
  totalScore++;
} else{
  console.log('No?! Are you not a believer? C\'mon get on the team!');
  alert('No?! Are you not a believer? C\'mon get on the team!');
}

// Question 6 - Age
var danAge = prompt('Can you guess how old I am? I will give you 4 attempts. Question 6/7');
var danAgeAttempt = 1;
for (danAgeAttempt; danAgeAttempt < 5; danAgeAttempt++) {
  while (isNaN(danAge)){
    danAge = prompt('That is not a number. Please enter a number');
  }
  if (danAgeAttempt === 4){
    console.log('All out of guesses! I am 33.');
    alert('All out of guesses! I am 33.');
    break;
  } else if (danAge == 33){
    console.log('Correct! On to the last question.');
    alert('Correct! On to the last question.');
    totalScore++;
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

// Question 7 Attempt 1
// var danMovie = prompt('Can you guess my favorite movie from this list? You get 6 attempts. 1: Hook, 2: Memento, 3: The Shawshank Redemption, 4: The Matrix, 5: Titan A.E., 6: LOTR, 7: Unforgiven, 8: SuperBad, 9: Brick, 10: In Bruges.');
// var movieAttempt = 0;
// danMovie = danMovie.toLowerCase();

// for (movieAttempt; movieAttempt < 6; movieAttempt++) {

//   if (movieAttempt === 6){
//     console.log('All out of guesses! My fave is Hook!');
//     alert('All out of guesses! My fave is Hook!');
//     break;
//   } else if (danMovie === 'hook'){
//     console.log('Correct! Rufio, Rufio, Ru - Fi - Ooooooo');
//     alert('Correct! Rufio, Rufio, Ru - Fi - Ooooooo');
//     break;
//   } else {
//     console.log('Wrong. Try again! ' + (5 - movieAttempt) + ' attempts left. Your choices are 1: Hook, 2: Memento, 3: The Shawshank Redemption, 4: The Matrix, 5: Titan A.E., 6: LOTR, 7: Unforgiven, 8: SuperBad, 9: Brick, 10: In Bruges.');
//     alert('Wrong. Try again! ' + (5 - movieAttempt) + ' attempts left. Your choices are 1: Hook, 2: Memento, 3: The Shawshank Redemption, 4: The Matrix, 5: Titan A.E., 6: LOTR, 7: Unforgiven, 8: SuperBad, 9: Brick, 10: In Bruges.');
//     danMovie = prompt((5 - movieAttempt) + ' attempts left. Your choices are 1: Hook, 2: Memento, 3: The Shawshank Redemption, 4: The Matrix, 5: Titan A.E., 6: LOTR, 7: Unforgiven, 8: SuperBad, 9: Brick, 10: In Bruges.');
//   }
// }

// Question 7 Attempt 2
var danMovie = ['hook', 'memento', 'the shawshank redemption', 'the matrix', 'aitan a.e.', 'lotr', 'unforgiven', 'superbad', 'brick', 'in bruges'];

var movieGuess = prompt('Can you guess my favorite movie? You get 6 attempts. I like Sci-fi, Fantasy, kids movies, westerns, and some artsy nonsense. Question 7/7');
var movieAttempt = 0;

movieGuess = movieGuess.toLowerCase();

for (movieAttempt; movieAttempt < 5; movieAttempt++) {
  if (danMovie.indexOf(movieGuess) > -1) {
    alert('You got it!');
    totalScore++;
    break;
  } else if (danMovie.indexOf(movieGuess) <= -1){
    console.log('Not quite! Keep guessing! ' + (5 - movieAttempt) + ' guesses left.');
    alert('Not quite! Keep guessing! ' + (5 - movieAttempt) + ' guesses left.');
    movieGuess = prompt('Try again. What is my fave movie? ' + (5 - movieAttempt) + ' guesses left.');
  } else if (movieAttempt == 6){
    console.log('All out of guesses! My fave is Hook!');
    alert('All out of guesses! My fave is Hook!');
  }
}

alert('Thanks for taking my quiz ' + userName + '. You got ' + totalScore + ' correct answers. Please click through to learn more about me!');

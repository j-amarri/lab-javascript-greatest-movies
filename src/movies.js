// Iteration 1: All directors? - Get the array of all directors.

/*
function getAllDirectors(moviesArray) {
  const moviesArrayDirectors = moviesArray.map(function (value) {
    return value.director;
  });
  return moviesArrayDirectors;
}
*/

function getAllDirectors(moviesArray) {
  const moviesArrayDirectors = moviesArray.map(value => value.director);
  return moviesArrayDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  const moviesStevenSpielberg = moviesArray.filter(
    value =>
      value.genre.includes('Drama') && value.director === 'Steven Spielberg'
  );
  return moviesStevenSpielberg.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

/* function ratesAverage(moviesArray) {
  let moviesRatesAverage = moviesArray.reduce(
    (accumulator, currentValue) =>
      (accumulator + currentValue.rate) / moviesArray.length
  );
  return Math.round(moviesRatesAverage * 100) / 100;
} */

function ratesAverage(moviesArray) {
  // not needed let initialValue = 0; i can set it to zero in reduce
  // let initialValue = 0;
  let moviesRatesAverage = moviesArray.reduce(function (
    accumulator,
    currentValue
  ) {
    return accumulator + currentValue.rate / moviesArray.length;
  },
  0);
  return Math.round(moviesRatesAverage * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArray) {
  // create a filtered array with drama movies only
  const dramaMovies = moviesArray.filter(value =>
    value.genre.includes('Drama')
  );
  // calculate average rate of drama movies
  // return this value as outcome of the overall function
  return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesCopy = [...moviesArray];
  let yearlyOrderedMovies = moviesCopy.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else {
      return -1;
    }
  });
  return yearlyOrderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// returns an array of all titles ordered alphabetically
function orderAlphabetically(moviesArray) {
  let titleOrderedMovies = moviesArray.map(value => value.title).sort();
  return titleOrderedMovies.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

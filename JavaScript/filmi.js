const numberOfFilms = +promt('How many films do you watch in these week?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:{},
    privat: false
};

const a = promt('Your last movie?', ''),
    b = prompt('According to your estimates?', ''),
    c = promt('Your last movie?', ''),
    d = prompt('According to your estimates?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
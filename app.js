"use scrict"
import { Movie } from "./src/utils/Movie.js"
import { MovieLibrary } from "./src/utils/MovieLibrary.js"

const movie1 = new Movie(1, "Signore degli Anelli", true, null, 3, 1);
const movie2 = new Movie(2, "Oppenheimer", false, "2026-03-03", 4, 2);
const movie3 = new Movie(3, "Pacific Rim", true, "2026-03-02", 5, 3);
const movie4 = new Movie(4, "Shrek", true, "2026-03-02", null, 3);


const library = new MovieLibrary([movie1, movie2, movie3]);
library.addMovie(movie4);

library.printMovies()


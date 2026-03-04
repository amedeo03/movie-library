"use scrict"
import dayjs from "dayjs";

export class MovieLibrary {
    constructor(movies) {
        this.movies = movies
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    printMovies() {
        this.movies.forEach(movie => {
            console.log(movie.toString());
        });
    }

    sortByDate() {
        return [...this.movies].sort((a, b) => {
            if (!a.watchDate && !b.watchDate) return 0;
            if (!a.watchDate) return 1;
            if (!b.watchDate) return -1;

            if (a.watchDate.isAfter(b.watchDate)) return 1;
            if (a.watchDate.isBefore(b.watchDate)) return -1;
            return 0;
        });
    }

    sortByRating() {
        return [...this.movies].sort((a, b) => {
            if (!a.rating && !b.rating) return 0;
            if (!a.rating) return 1;
            if (!b.rating) return -1;

            return b.rating - a.rating 
        });
    }

    removeMovie(movieId) {
        this.movies = this.movies.filter(movie => movie.id !== movieId);
    }

}

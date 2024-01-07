class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Example usage
// Creating an instance of the class Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");


// Creating an array of Movie instances
const moviesArray = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3", "PG-13"),
    
];
 
// Using the getPG method to get an array of movies with a rating of "PG"
const pgMoviesArray = Movie.getPG(moviesArray);
console.log(pgMoviesArray);

// Logging the title of PG-rated movies
pgMoviesArray.forEach(movie => {
    console.log(movie.title);
    
    
});

//output:
//[ Movie { title: 'Movie1', studio: 'Studio1', rating: 'PG' } ]
//Movie1
$(function() {
    let movies = [];

    function createMovieElement(movie) {
        return $(`<div class="movie">
            <span class="movie-title">${movie.title}</span>
            <span class="movie-rating">${movie.rating}</span>
            <button class="delete">Delete</button>
        </div>`);
    }

    function refreshMovieList() {
        $("#movie-list").empty();
        for (let movie of movies) {
            $("#movie-list").append(createMovieElement(movie));
        }
    }

    $("#movie-form").on("submit", function(event) {
        event.preventDefault();
        let title = $("#title").val();
        let rating = $("#rating").val();
        movies.push({title, rating});
        refreshMovieList();
        this.reset();
    });

    $("#movie-list").on("click", ".delete", function(event) {
        let index = $(this).closest(".movie").index();
        movies.splice(index, 1);
        refreshMovieList();
    });

    $("#sort-title").on("click", function() {
        movies.sort((a, b) => a.title.localeCompare(b.title));
        refreshMovieList();
    });

    $("#sort-rating").on("click", function() {
        movies.sort((a, b) => a.rating - b.rating);
        refreshMovieList();
    });
});

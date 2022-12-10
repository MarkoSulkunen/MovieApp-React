import MovieList from "../components/MovieList";
import React, { useState, useEffect } from "react";
import RemoveMovie from "../components/RemoveMovie";
import ListHeading from "../components/ListHeading";

const DeleteMovie = () => {
  const [movie, setMovies] = useState([]);

  // Fetches movie data from firebase
  const fetchMovies = async () => {
    const response = await fetch(
      "https://movie-9fbd2-default-rtdb.europe-west1.firebasedatabase.app/movies.json"
    );

    const moviedata = await response.json();

    const fetchedMovies = [];

    for (const key in moviedata) {
      fetchedMovies.push({
        id: key,
        title: moviedata[key].title,
        year: moviedata[key].year,
        story: moviedata[key].story,
        genre: moviedata[key].genre,
      });
    }

    setMovies(fetchedMovies);
  };

  // Removes movie by id from firebase movies table
  const deleteMovie = async (movie) => {
    console.log(movie);
    const response = await fetch(
      "https://movie-9fbd2-default-rtdb.europe-west1.firebasedatabase.app/movies/" +
        movie.id +
        ".json",
      {
        method: "DELETE",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const moviedata = await response.json();
    console.log(moviedata);
    fetchMovies();
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <ListHeading heading="Movies" />
        </div>
        <div className="row">
          <MovieList
            movies={movie}
            handleList={deleteMovie}
            ListComponent={RemoveMovie}
          />
        </div>
      </div>
    </>
  );
};

export default DeleteMovie;

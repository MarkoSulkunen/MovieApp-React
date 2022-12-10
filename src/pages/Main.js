import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import ListHeading from "../components/ListHeading";
import AddToWatchList from "../components/AddToWatchList";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  // Fetches moviedata from firebase
  const fetchMovies = async () => {
    const response = await fetch(
      "https://movie-9fbd2-default-rtdb.europe-west1.firebasedatabase.app/movies.json"
    );

    const data = await response.json();

    const fetchedMovies = [];

    for (const key in data) {
      fetchedMovies.push({
        id: key,
        title: data[key].title,
        year: data[key].year,
        story: data[key].story,
        genre: data[key].genre,
      });
    }

    setMovies(fetchedMovies);
  };

  // Posts moviedata in firebase
  const addWatchlistHandler = async (movie) => {
    console.log(movie);
    const response = await fetch(
      "https://movie-9fbd2-default-rtdb.europe-west1.firebasedatabase.app/watchlist.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const watchlistdata = await response.json();
    console.log(watchlistdata);
  };

  // Fetches watchlist data from firebase
  const fetchWatchlist = async () => {
    const response = await fetch(
      "https://movie-9fbd2-default-rtdb.europe-west1.firebasedatabase.app/watchlist.json"
    );

    const watchlistdata = await response.json();

    const fetchedWatchlist = [];

    for (const key in watchlistdata) {
      fetchedWatchlist.push({
        id: key,
        title: watchlistdata[key].title,
        year: watchlistdata[key].year,
        story: watchlistdata[key].story,
        genre: watchlistdata[key].genre,
      });
    }

    setWatchlist(fetchedWatchlist);
  };

  const addMovieToWatchlist = (movie) => {
    const newWatchList = [...watchlist, movie];
    setWatchlist(newWatchList);
    addWatchlistHandler(movie);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    fetchWatchlist();
  }, []);

  return (
    <>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <ListHeading heading="Movies" />
        </div>
        <div className="row">
          <MovieList
            movies={movies}
            ListComponent={AddToWatchList}
            handleList={addMovieToWatchlist}
          />
        </div>
      </div>
    </>
  );
};

export default Main;

import MovieList from "../components/MovieList";
import React, { useState, useEffect } from "react";
import RemoveFromWatchList from "../components/RemoveFromWatchList";
import ListHeading from "../components/ListHeading";

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);

  // Fetches watchlist from firebase
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

  // Removes movie by id from watchlist table
  const deleteFromWatchlist = async (movie) => {
    console.log(movie);
    const response = await fetch(
      "https://movie-9fbd2-default-rtdb.europe-west1.firebasedatabase.app/watchlist/" +
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

    const watchlistdata = await response.json();
    console.log(watchlistdata);
    fetchWatchlist();
  };

  useEffect(() => {
    fetchWatchlist();
  }, []);

  return (
    <>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <ListHeading heading="Watchlist" />
        </div>
        <div className="row">
          <MovieList
            movies={watchlist}
            handleList={deleteFromWatchlist}
            ListComponent={RemoveFromWatchList}
          />
        </div>
      </div>
    </>
  );
};

export default WatchList;

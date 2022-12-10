import { useRef } from "react";
import { errorNotify, successNotify } from "../toast/Toastify";

const AddMovies = () => {
  const textRef = useRef("");
  const textRef2 = useRef("");
  const textRef3 = useRef("");
  const textRef4 = useRef("");

  // Add given text to addMoviesHandler -function
  const submitHandler = (event) => {
    event.preventDefault();

    const movie = {
      title: textRef.current.value,
      year: textRef2.current.value,
      story: textRef3.current.value,
      genre: textRef4.current.value,
    };

    addMoviesHandler(movie);
  };

  // Adds movie to firebase
  const addMoviesHandler = async (movie) => {
    console.log(movie);
    try {
      await fetch(
        "https://movie-9fbd2-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      successNotify("New movie added!");
    } catch (error) {
      errorNotify(error.message);
    }
  };

  return (
    <div className="form-box">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="text">Title</label>
          <br></br>
          <input type="text" id="title" ref={textRef}></input>
        </div>
        <div>
          <label htmlFor="text">Year</label>
          <br></br>
          <input type="text" id="year" ref={textRef2}></input>
        </div>
        <div>
          <label htmlFor="text">Genre</label>
          <br></br>
          <input type="text" id="genre" ref={textRef4}></input>
        </div>
        <div>
          <label htmlFor="text">Story</label>
          <textarea id="story" ref={textRef3} />
        </div>

        <button>Add new movie</button>
      </form>
    </div>
  );
};

export default AddMovies;

import { Link, useParams } from "react-router-dom";
import { Aside, Container, Content, GoBack, Img } from "./StoryStyle";
import defaultposter from "../components/defaultposter.jpg";
import { useEffect, useState } from "react";

const IMG_API = "";
const defaultImage = defaultposter;

const Story = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const Url = `https://movie-9fbd2-default-rtdb.europe-west1.firebasedatabase.app/movies/${id}.json`;

  useEffect(() => {
    fetch(Url)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [Url]);

  const { title, story, year, genre } = movie;

  return (
    <>
      <Container>
        <Content>
          <Img
            src={movie?.poster ? IMG_API + movie?.poster : defaultImage}
            alt={movie?.title}
          />
          <Aside>
            <div className="title">{title}</div>
            <div className="story">
              <div>{story}</div>
              <div className="year">
                {genre} / {year}
              </div>
            </div>
          </Aside>
        </Content>
        <GoBack>
          <Link to={-1}>Back</Link>
        </GoBack>
      </Container>
    </>
  );
};

export default Story;

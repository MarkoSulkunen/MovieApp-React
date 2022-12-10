import React from "react";
import {
  Card,
  Title,
  Img,
  ImgContainer,
  ListContainer,
} from "./MovieCardStyle";
import { useNavigate } from "react-router-dom";
import defaultposter from "./defaultposter.jpg";
import AddToListComponent from "./AddToListComponent";

const IMG_API = "";
const defaultImage = defaultposter;

const MovieList = (props) => {
  const ListComponent = props.ListComponent;
  const navigate = useNavigate();

  return (
    <>
      {props.movies?.map((movie) => (
        <Card key={movie?.id}>
          <Title>{movie?.title}</Title>
          <ImgContainer onClick={() => navigate(`/story/${movie?.id}`)}>
            <Img
              src={props.poster ? IMG_API + props.poster : defaultImage}
              alt={movie?.title}
            />
          </ImgContainer>
          <ListContainer onClick={() => props.handleList(movie)}>
            <AddToListComponent></AddToListComponent>
          </ListContainer>
          <ListComponent />
        </Card>
      ))}
    </>
  );
};

export default MovieList;

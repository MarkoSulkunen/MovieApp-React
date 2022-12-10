import styled from "styled-components";

export const Card = styled.div`
  height: 450px;
  width: 250px;
  overflow: hidden;
  box-shadow: rgba(005, 005, , 0.2) 0px 7px 29px 0px;
  border-radius: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  text-align: center;
  &:hover {
    border: 1px solid white;
  }
`;
export const Title = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  color: #c7cdd3;
  font-size: 1rem;
  @media (max-width: 1430px) {
    font-size: 1rem;
  }
  @media (max-width: 1220px) {
    font-size: 0.8rem;
  }
`;
export const ImgContainer = styled.div`
  width: 100%;
  height: 90%;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ListContainer = styled.div`
  height: 100px;
  font-weight: 700;
  background-color: black;
  color: #c7cdd3;
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

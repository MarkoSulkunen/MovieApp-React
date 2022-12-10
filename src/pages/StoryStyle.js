import styled from "styled-components";

export const Container = styled.main`
  width: 80%;
  margin: 2rem auto;
  padding: 2rem 2rem 0 2rem;
  box-shadow: rgba(005, 005, 005, 0.5) 10px 7px 29px 10px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 300px;
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;
  .title {
    color: #c7cdd3;
    padding: 1rem;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;
  }
  .year {
    color: #c7cdd3;
    text-align: center;
    padding: 0rem 2.5rem;
    font-weight: bold;
    font-size: 13px;
    padding: 1.5rem 0rem;
  }
  .story {
    height: 100%;
    padding: 0rem 2rem;
    display: flex;
    flex-direction: column;
    line-height: 2rem;
    color: #c7cdd3;
  }
  }
`;

export const GoBack = styled.span`
  padding: 1rem 2rem;
  background-color: black;
  margin: 2rem auto 0;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  transition: all 1s;
  color: #c7cdd3;
  cursor: pointer;
  a {
    color: #c7cdd3;
  }
`;

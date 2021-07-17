import styled from "styled-components";

export const FormStyle = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  min-height: 600px;

  form {
    border-radius: 10px;
    box-shadow: 0 2px 8px gray;
    display: flex;
    flex-wrap: wrap;
    flex: 0 1 85%;
    justify-content: center;
    padding: 30px;
  }
  form > input,
  .text-danger {
    width: 100%;
  }

  @media only screen and (min-width: 920px) {
    form {
      flex-basis: 55%;
    }
  }
`;

export const MainStyled = styled.main`
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
  min-height: 88vh;

  & > .card,
  & > .answer-list {
    box-shadow: 0 2px 8px gray;
    display: flex;
    flex: 0 1 70%;
  }

  & > .spinner-wrapper {
    display: flex;
    flex-basis: 70%;
    justify-content: center;
  }

  & svg {
    border: 1px solid black;
    cursor: pointer;
  }

  & .initial-content {
    flex-basis: 70%;
    font-size: 1.5rem;
    text-align: center;
  }
`;

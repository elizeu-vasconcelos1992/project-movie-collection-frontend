import styled from "styled-components";

export const StyledMovieCard = styled.li`
  width: 280px;
  height: 400px;
  display: flex;
  flex-direction: column;
  perspective: 700px;
  position: relative;

  div {
    width: 100%;
    height: 100%;
    padding: 1rem;
    position: absolute;
    border-radius: 10px;
    transition: 1s;

    h3 {
      text-align: center;
      color: black;
      max-width: 22ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .front-card {
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--color-gray);
    box-shadow: 0px 0px 9px 3px rgba(255, 255, 255, 0.5);

    img {
      width: 100%;
      height: 85%;
      border-radius: 8px;
    }
  }

  .back-card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    transform: rotateY(-180deg);
    backface-visibility: hidden;
    background-color: var(--color-yellow);

    p {
      font-size: calc(1vw + 1.5px);
      text-align: justify;
      line-height: 20px;
    }

    .sinopse {
      max-width: 40ch;
      overflow-y: scroll;
      overflow-x: hidden;
      text-overflow: ellipsis;
      ::-webkit-scrollbar {
        width: 3px;
        height: 2px;
      }
      ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
      }
      ::-webkit-scrollbar-thumb {
        background: var(--color-gray);
        border: 0px none var(--color-gray);
        border-radius: 50px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: var(--color-yellow);
      }
      ::-webkit-scrollbar-thumb:active {
        background: var(--color-yellow);
      }
      ::-webkit-scrollbar-track {
        background: var(--color-yellow);
        border: 0px none var(--color-yellow);
        border-radius: 50px;
      }
      ::-webkit-scrollbar-track:hover {
        background: var(--color-yellow);
      }
      ::-webkit-scrollbar-track:active {
        background: var(--color-yellow);
      }
      ::-webkit-scrollbar-corner {
        background: transparent;
      }
    }
  }

  button {
    width: 90%;
    height: 2.5rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.25rem;
    background-color: var(--color-gray);
    border: 1px solid var(--color-gray);
    cursor: pointer;
    transition: 0.3s;

    :hover {
      background-color: var(--color-gray-2);
      border: 1px solid var(--color-gray-2);
    }
  }

  :hover .front-card {
    transform: rotateY(180deg);
    z-index: 0;
  }

  :hover .back-card {
    transform: rotateY(0);
    z-index: 1;
  }
`;

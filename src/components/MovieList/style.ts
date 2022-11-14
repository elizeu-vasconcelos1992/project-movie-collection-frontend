import styled from "styled-components";

export const StyledMovieList = styled.ul`
  width: 100%;
  display: flex;
  overflow-x: hidden;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 2rem;

  ::-webkit-scrollbar {
    width: 10px;
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
`;

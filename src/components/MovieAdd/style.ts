import styled from "styled-components";

export const StyledMovieAdd = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  button {
    min-width: 150px;
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
    }
  }

  @media (max-width: 610px) {
    margin: 0 auto;

    button {
      font-size: calc(1vw + 0.5rem);
    }
  }
`;

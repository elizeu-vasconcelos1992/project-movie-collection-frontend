import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem 0 1.5rem;
  background-color: var(--color-yellow);

  h3 {
    font-size: calc(1vw + 0.5rem);
  }

  img {
    width: 250px;
    height: 80px;
  }

  button {
    width: 100px;
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

  @media (max-width: 610px) {
    img {
      display: none;
    }

    button {
      font-size: calc(1vw + 0.5rem);
    }
  }
`;

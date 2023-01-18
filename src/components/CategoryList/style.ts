import styled from "styled-components";

export const StyledCategoryList = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0 0 1rem;
  gap: 1rem;
  overflow-y: hidden;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  button {
    min-width: fit-content;
    font-size: calc(0.2vw + 10px);
    height: fit-content;
    background-color: transparent;
    border-radius: 5px;
    padding: 2px 8px;
    border: 1px solid var(--color-red-2);
    cursor: pointer;
    transition: 0.3s;

    :hover {
      transform: scale(1.2);
      background-color: var(--color-red-2);
    }
  }

  @media (max-width: 610px) {
    width: 100%;
  }
`;

import styled from "styled-components";

export const StyledCategoryList = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;
  gap: 1rem;

  button {
    width: fit-content;
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
`;

import styled from "styled-components";

export const StyledFormCreateMovie = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 1rem;

  label {
    width: 80%;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    font-weight: 400;

    input {
      width: 100%;
      height: 2rem;
      padding: 0 10px 0 10px;
    }

    p {
      font-size: 0.75rem;
      color: var(--color-red);
    }
  }

  button {
    width: 80%;
    height: 2rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 0.25rem;
    background-color: var(--color-gray-2);
    border: 1px solid var(--color-gray-2);
    cursor: pointer;
    transition: 0.3s;

    :hover {
      background-color: var(--color-yellow);
    }
  }
`;
